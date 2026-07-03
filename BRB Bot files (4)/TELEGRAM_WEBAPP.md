# BRB Bot — Telegram Web App (Mini App) integratsiyasi

> Claude Code uchun qoidalar va bosqichlar. Loyiha: sof statik frontend
> (`index.html` + `support.js`), backend YO'Q, Vercel'ga deploy qilingan.
> Maqsad: shu saytni Telegram Mini App sifatida ochish.

---

## Loyiha holati (hozirgi)

- [x] `telegram-web-app.js` SDK **statik** `<head>`da ulangan (2026-07-03: `<helmet>`dan
      ko'chirildi — helmet skriptlari dc-runtime orqali dinamik qo'shilganda external
      script async yuklanib, inline'dagi `window.Telegram` guard har doim `false`
      bo'lib qolardi, ya'ni `tg.ready()`/`tg.expand()` Telegram ichida umuman ishlamasdi)
- [x] `tg.ready()`, `tg.expand()`, `setHeaderColor`, `setBackgroundColor` chaqirilgan
- [x] `window.Telegram.WebApp` mavjudligi `if` bilan tekshirilgan (brauzerda ham ishlaydi)
- [x] Mobil layout: `@media (max-width:500px)` da phone-frame to'liq ekranga o'tadi
- [x] 2.1 — `--tg-vh` viewport balandligi qo'llandi (`viewportChanged` event bilan)
- [x] 2.2 — `disableVerticalSwipes()` feature-detection bilan qo'llandi
- [ ] BotFather'da bot + Mini App sozlanmagan (qo'lda bajariladi, 1-bosqich)

---

## 1-bosqich: BotFather (qo'lda, Telegram'da bajariladi)

Bu bosqich kod emas — foydalanuvchi Telegram'da @BotFather bilan bajaradi:

1. `/newbot` → bot nomi va username (masalan `brb_uz_bot`) → token beriladi.
   Token hozircha kerak emas (backend yo'q), lekin saqlab qo'yish kerak.
2. Mini App ulashning ikki varianti:

   **Variant A — Menu Button (eng oddiy, tavsiya):**
   - `/mybots` → botni tanlash → **Bot Settings** → **Menu Button** →
     **Configure menu button** → Vercel URL kiritiladi
     (masalan `https://brb-bot.vercel.app`) → tugma nomi (masalan "Ochish").
   - Natija: bot chatida pastki chap burchakda tugma paydo bo'ladi,
     bosilganda Mini App ochiladi.

   **Variant B — `/newapp` (to'liq Mini App):**
   - `/newapp` → botni tanlash → nom, tavsif, 640x360 rasm (photo),
     URL → qisqa nom (short name).
   - Natija: `https://t.me/<bot_username>/<short_name>` havolasi —
     to'g'ridan-to'g'ri ulashish mumkin, inline'da ham ishlaydi.

   Ikkalasini ham qilish mumkin, bir-biriga xalaqit bermaydi.

3. URL talablari:
   - Faqat HTTPS (Vercel default beradi ✓)
   - Redirect'siz to'g'ridan-to'g'ri sahifa ochilishi kerak
   - Vercel preview URL emas, production domain ishlatilsin
     (preview URL har deploy'da o'zgaradi)

---

## 2-bosqich: Frontend'ni Telegram muhitiga moslash (Claude Code bajaradi)

### 2.1. Viewport balandligi

Telegram'da `100vh`/`100dvh` noto'g'ri ishlashi mumkin (klaviatura, header
panel). `viewportChanged` event orqali barqaror balandlikni CSS variable'ga
yozish kerak:

```js
if (window.Telegram && window.Telegram.WebApp) {
  const tg = window.Telegram.WebApp;
  const setVh = () => {
    document.documentElement.style.setProperty(
      '--tg-vh', tg.viewportStableHeight + 'px'
    );
  };
  setVh();
  tg.onEvent('viewportChanged', setVh);
}
```

CSS'da: `height: var(--tg-vh, 100dvh);` — Telegram'dan tashqarida
`100dvh` fallback ishlaydi. Mavjud `@media (max-width:500px)` blokidagi
`height: 100dvh` joylarini shunga almashtirish kerak.

### 2.2. Vertikal swipe'ni o'chirish

App ichida scroll qilganda foydalanuvchi tasodifan Mini App'ni pastga
tortib yopib yubormasligi uchun (Bot API 7.7+):

```js
if (tg.isVerticalSwipesEnabled !== undefined) {
  tg.disableVerticalSwipes();
}
```

### 2.3. Fullscreen kengaytirish

`tg.expand()` allaqachon bor ✓. Qo'shimcha hech narsa kerak emas,
lekin `tg.requestFullscreen()` (Bot API 8.0+) FAQAT foydalanuvchi
so'rasagina qo'shilsin — default holatda kerak emas.

### 2.4. Foydalanuvchi ma'lumotlari (ixtiyoriy)

Backend yo'qligi uchun `initData` ni tekshirib (validate) bo'lmaydi.
Shuning uchun:
- `tg.initDataUnsafe.user` dan faqat KOSMETIK maqsadda foydalanish
  mumkin (ism ko'rsatish, til aniqlash: `user.language_code`).
- `initDataUnsafe` asosida HECH QANDAY muhim qaror qabul qilinmasin
  (auth, huquqlar) — bu ma'lumot clientda soxtalashtirilishi mumkin.
- Kelajakda backend qo'shilsa, `initData` string'i serverga yuborilib,
  bot token bilan HMAC-SHA256 orqali tekshirilishi SHART.

### 2.5. Tema (ixtiyoriy)

Hozir rang'lar hardcode (`#ffffff`, `#ECECEC`). Bu maqbul — BRB brend
ranglari ustuvor. `tg.themeParams` ga o'tish SHART EMAS. Faqat
`setHeaderColor`/`setBackgroundColor` mavjud holatda qoldirilsin.

### 2.6. Yopishdan oldin tasdiqlash (ixtiyoriy)

Foydalanuvchi forma to'ldirayotganda tasodifan yopib yubormasligi uchun:

```js
tg.enableClosingConfirmation();
```

Faqat forma/flow ochiq bo'lganda yoqish, tugagach
`tg.disableClosingConfirmation()` qilish mumkin.

---

## 3-bosqich: Vercel sozlamalari

- `index.html` loyiha root'ida bo'lsin yoki `vercel.json`da to'g'ri
  yo'naltirilsin. Hozir fayl `uploads/BRB_Bot/` ichida — bu Vercel'da
  root sifatida sozlangan bo'lishi kerak (Root Directory setting).
- Agar SPA routing kerak bo'lsa (hozir kerak emas, bitta HTML):
  `vercel.json` rewrites shart emas.
- Cache: `index.html` uchun `Cache-Control: no-cache` tavsiya qilinadi,
  aks holda Telegram eski versiyani ko'rsatishi mumkin:

```json
{
  "headers": [
    {
      "source": "/index.html",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, must-revalidate" }
      ]
    }
  ]
}
```

- `X-Frame-Options` yoki `Content-Security-Policy: frame-ancestors`
  header'lari Telegram'ni bloklamasligi kerak. Vercel default'da
  bularni qo'ymaydi ✓. Agar keyin qo'shilsa, Telegram domenlariga
  ruxsat berilsin.

---

## 4-bosqich: Test

1. **Telegram ichida:** bot chatidagi Menu Button orqali ochish
   (mobil + Desktop). Desktop'da o'ng tugma → "Inspect" bilan
   DevTools ochish mumkin (beta versiyada yoki
   Settings → Advanced → Experimental → Enable webview inspecting).
2. **Brauzerda:** oddiy URL orqali — `window.Telegram.WebApp` yo'q
   bo'lganda ham app buzilmasligi kerak (hozirgi `if` guard buni
   ta'minlaydi, saqlanib qolsin).
3. Tekshirish ro'yxati:
   - [ ] App to'liq balandlikda ochiladi, pastida bo'sh joy yo'q
   - [ ] Scroll paytida app yopilib ketmaydi (swipe disabled)
   - [ ] Klaviatura ochilganda layout buzilmaydi
   - [ ] Safe area (iPhone notch) hisobga olingan
   - [ ] Bottom nav Telegram'ning o'z panellari ostida qolmaydi

---

## Qat'iy qoidalar (invariantlar)

1. `window.Telegram.WebApp` mavjudligi HAR DOIM tekshirilsin —
   app Telegram'siz brauzerda ham ishlashi kerak.
2. `initDataUnsafe` — faqat kosmetika. Auth/huquq uchun ISHLATILMASIN.
3. Bot token frontend kodiga HECH QACHON qo'yilmasin.
4. Yangi Telegram API metodlari chaqirilishidan oldin versiya
   tekshirilsin: `tg.isVersionAtLeast('7.7')` yoki metod mavjudligi
   (`typeof tg.disableVerticalSwipes === 'function'`).
5. `phone-frame` desktop-preview rejimi (>500px) o'zgartirilmasin —
   bu demo/ko'rsatish uchun ataylab qilingan.
