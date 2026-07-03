/* @ds-bundle: {"format":3,"namespace":"RMPDesignSystem_3407a0","components":[],"sourceHashes":{"ui_kits/rmp/AdminUsers.jsx":"afb5b05799a3","ui_kits/rmp/App.jsx":"53cd4a8afdbf","ui_kits/rmp/AuditLog.jsx":"e92d4b3fd496","ui_kits/rmp/CreateTicket.jsx":"1bfe4204702e","ui_kits/rmp/Dashboard.jsx":"30318407ced1","ui_kits/rmp/DeployView.jsx":"2f59d2d28e34","ui_kits/rmp/Shell.jsx":"60faf39a30f2","ui_kits/rmp/TicketDetail.jsx":"a886eac62480","ui_kits/rmp/TicketList.jsx":"116126c1be5f","ui_kits/rmp/data.js":"7d66c0cd7621","ui_kits/rmp/ui.jsx":"9281fbe86512"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RMPDesignSystem_3407a0 = window.RMPDesignSystem_3407a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/rmp/AdminUsers.jsx
try { (() => {
/* Admin: Users & roles */

const ALL_ROLES = ['Developer', 'Team Lead', 'Product Manager', 'CTO', 'Release Engineer', 'Auditor'];
function AdminUsers({
  navigate
}) {
  const {
    users,
    roleAssignments
  } = window.RMP_DATA;
  const [rows, setRows] = useState(roleAssignments);
  const [editUser, setEditUser] = useState(null);
  const toggleRole = (userId, role) => {
    setRows(rs => rs.map(r => {
      if (r.user !== userId) return r;
      const has = r.roles.includes(role);
      return {
        ...r,
        roles: has ? r.roles.filter(x => x !== role) : [...r.roles, role]
      };
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Users & roles"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Provisioned via SSO. Roles control what actions a user can take in RMP \u2014 segregation of duties is enforced regardless of roles.")), /*#__PURE__*/React.createElement("div", {
    className: "page-header-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "user-plus"
  }, "Invite user"))), /*#__PURE__*/React.createElement("div", {
    className: "row gap-4",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Total users",
    value: rows.length,
    icon: "users-round"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Approvers",
    value: rows.filter(r => r.roles.some(x => ['Team Lead', 'Product Manager', 'CTO'].includes(x))).length,
    icon: "user-check",
    tone: "ok"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Release Engineers",
    value: rows.filter(r => r.roles.includes('Release Engineer')).length,
    icon: "rocket"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Auditors",
    value: rows.filter(r => r.roles.includes('Auditor')).length,
    icon: "history"
  })), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filterbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 1 280px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 13,
    style: {
      position: 'absolute',
      left: 10,
      top: 10,
      color: 'var(--ink-400)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Search users\u2026",
    style: {
      paddingLeft: 30,
      height: 32
    }
  })), /*#__PURE__*/React.createElement("select", {
    className: "select",
    style: {
      width: 180,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("option", null, "All roles"), ALL_ROLES.map(r => /*#__PURE__*/React.createElement("option", {
    key: r
  }, r))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "SSO group sync \xB7 last 4 min ago")), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "User"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Roles"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 130
    }
  }, "Last sign-in"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "MFA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 50
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => {
    const u = users[r.user];
    return /*#__PURE__*/React.createElement("tr", {
      key: r.user,
      onClick: () => setEditUser(r)
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "row gap-2 items-center"
    }, /*#__PURE__*/React.createElement(Avatar, {
      user: u
    }), /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--ink-800)',
        fontWeight: 500
      }
    }, u.name), /*#__PURE__*/React.createElement("span", {
      className: "caption"
    }, u.role)))), /*#__PURE__*/React.createElement("td", {
      className: "mono caption"
    }, u.id, "@global.uz"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "row gap-1 wrap"
    }, r.roles.map(role => /*#__PURE__*/React.createElement(RolePill, {
      key: role,
      role: role
    })))), /*#__PURE__*/React.createElement("td", {
      className: "mono caption"
    }, "2026-05-23 14:18"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "chip",
      style: {
        background: 'var(--success-50)',
        color: 'var(--success-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 11
    }), " Enrolled")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      icon: "more-horizontal"
    })));
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!editUser,
    onClose: () => setEditUser(null)
  }, editUser && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalHead, {
    title: "Edit role assignments",
    sub: `${users[editUser.user].name} · ${users[editUser.user].id}@global.uz`,
    onClose: () => setEditUser(null)
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    icon: "shield-check",
    title: "Roles control allowed actions"
  }, "A single user can hold multiple roles. PCI DSS segregation of duties still blocks any actor from approving their own ticket regardless of assigned roles."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-2"
  }, ALL_ROLES.map(role => /*#__PURE__*/React.createElement("label", {
    key: role,
    className: "row items-center gap-3",
    style: {
      padding: '10px 12px',
      border: `1px solid ${editUser.roles.includes(role) ? 'var(--brand-100)' : 'var(--ink-100)'}`,
      background: editUser.roles.includes(role) ? 'var(--brand-50)' : 'white',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: editUser.roles.includes(role),
    onChange: () => {
      toggleRole(editUser.user, role);
      setEditUser({
        ...editUser,
        roles: editUser.roles.includes(role) ? editUser.roles.filter(x => x !== role) : [...editUser.roles, role]
      });
    },
    style: {
      accentColor: 'var(--brand-500)',
      width: 14,
      height: 14
    }
  }), /*#__PURE__*/React.createElement(RolePill, {
    role: role
  }), /*#__PURE__*/React.createElement("span", {
    className: "caption",
    style: {
      marginLeft: 'auto'
    }
  }, roleDescription(role)))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setEditUser(null)
  }, "Close"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check",
    onClick: () => {
      showToast(`Roles updated for ${users[editUser.user].name}`);
      setEditUser(null);
    }
  }, "Save changes")))));
}
function StatCard({
  label,
  value,
  icon,
  tone
}) {
  const c = {
    ok: 'var(--brand-600)'
  }[tone] || 'var(--ink-500)';
  return /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row between items-start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "caption"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--ink-800)',
      letterSpacing: '-0.02em',
      marginTop: 4
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--ink-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: c
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }))));
}
function RolePill({
  role
}) {
  const styles = {
    'Developer': {
      bg: 'var(--brand-50)',
      fg: 'var(--brand-700)',
      icon: 'code'
    },
    'Team Lead': {
      bg: 'var(--info-50)',
      fg: 'var(--info-700)',
      icon: 'wrench'
    },
    'Product Manager': {
      bg: '#fdf4e6',
      fg: '#8b5a13',
      icon: 'briefcase'
    },
    'CTO': {
      bg: 'var(--emergency-50)',
      fg: 'var(--emergency-700)',
      icon: 'shield-check'
    },
    'Release Engineer': {
      bg: 'var(--warning-50)',
      fg: 'var(--warning-700)',
      icon: 'rocket'
    },
    'Auditor': {
      bg: 'var(--ink-50)',
      fg: 'var(--ink-600)',
      icon: 'history'
    }
  }[role] || {
    bg: 'var(--ink-50)',
    fg: 'var(--ink-600)',
    icon: 'tag'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: styles.bg,
      color: styles.fg,
      textTransform: 'none',
      fontSize: 11,
      letterSpacing: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: styles.icon,
    size: 11
  }), role);
}
function roleDescription(role) {
  return {
    'Developer': 'Files RM tickets',
    'Team Lead': 'Technical Approval',
    'Product Manager': 'Business Approval',
    'CTO': 'Final Approval · Emergency',
    'Release Engineer': 'Triggers deploys',
    'Auditor': 'Read-only · export'
  }[role] || '';
}
Object.assign(window, {
  AdminUsers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/AdminUsers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/App.jsx
try { (() => {
/* RMP UI Kit — top-level App with hash-router */

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [currentRole, setCurrentRole] = useState({
    userId: 'anya'
  }); // default to CTO so the prototype shows action affordances
  // Mutable ticket store for the prototype — clones of the data so we can update without trashing originals
  const [, force] = useState(0);
  const navigate = useCallback(to => {
    window.location.hash = to;
  }, []);
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Re-render lucide icons after each route change
  useEffect(() => {
    if (window.lucide) {
      setTimeout(() => window.lucide.createIcons({
        nameAttr: 'data-lucide'
      }), 40);
    }
  }, [route, currentRole]);

  // Demo mutator: when user approves/rejects/changes, advance the ticket state in memory
  const mutateTicket = useCallback((id, action, comment, user) => {
    const t = window.RMP_DATA.tickets.find(x => x.id === id);
    if (!t) return;
    const stage = t.status === 'PENDING_TECH_REVIEW' ? 'tech' : t.status === 'PENDING_BUSINESS_REVIEW' ? 'business' : t.status === 'PENDING_FINAL_APPROVAL' ? 'final' : null;
    if (action === 'approve' && stage) {
      t.approvals[stage] = {
        state: 'approved',
        user: user.id,
        at: 'just now',
        comment
      };
      // Promote pipeline
      if (stage === 'tech') {
        t.status = 'PENDING_BUSINESS_REVIEW';
        t.approvals.business.state = 'pending';
      } else if (stage === 'business') {
        t.status = 'PENDING_FINAL_APPROVAL';
        t.approvals.final.state = 'pending';
      } else if (stage === 'final') {
        t.status = 'APPROVED';
      }
      t.timeline.push({
        type: 'approved',
        text: `granted ${stage === 'tech' ? 'Technical' : stage === 'business' ? 'Business' : 'Final'} Approval`,
        who: user.id,
        at: 'just now',
        comment
      });
    } else if (action === 'reject') {
      t.status = 'REJECTED';
      t.timeline.push({
        type: 'rejected',
        text: 'rejected the release',
        who: user.id,
        at: 'just now',
        comment
      });
    } else if (action === 'changes') {
      t.status = 'CHANGES_REQUESTED';
      t.timeline.push({
        type: 'changes',
        text: 'requested changes — sent back to author',
        who: user.id,
        at: 'just now',
        comment
      });
    }
    force(n => n + 1);
  }, []);

  // Route parsing
  let view;
  if (route === '#/' || route === '') {
    view = /*#__PURE__*/React.createElement(Dashboard, {
      navigate: navigate,
      currentRole: currentRole
    });
  } else if (route === '#/tickets') {
    view = /*#__PURE__*/React.createElement(TicketList, {
      navigate: navigate
    });
  } else if (route.startsWith('#/ticket/')) {
    const id = route.split('/')[2];
    view = /*#__PURE__*/React.createElement(TicketDetail, {
      ticketId: id,
      navigate: navigate,
      currentRole: currentRole,
      mutateTicket: mutateTicket
    });
  } else if (route === '#/new') {
    view = /*#__PURE__*/React.createElement(CreateTicket, {
      navigate: navigate,
      currentRole: currentRole
    });
  } else if (route.startsWith('#/deploy/')) {
    const id = route.split('/')[2];
    view = /*#__PURE__*/React.createElement(DeployView, {
      ticketId: id,
      navigate: navigate,
      currentRole: currentRole
    });
  } else if (route === '#/audit') {
    view = /*#__PURE__*/React.createElement(AuditLog, {
      navigate: navigate
    });
  } else if (route === '#/admin') {
    view = /*#__PURE__*/React.createElement(AdminUsers, {
      navigate: navigate
    });
  } else if (route === '#/settings') {
    view = /*#__PURE__*/React.createElement(SettingsPlaceholder, null);
  } else {
    view = /*#__PURE__*/React.createElement("div", {
      className: "surface surface-pad"
    }, "Page not found: ", route);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "app",
    "data-screen-label": "RMP"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-topbar"
  }, /*#__PURE__*/React.createElement(TopBar, {
    currentRole: currentRole,
    setCurrentRole: setCurrentRole
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    navigate: navigate,
    currentRole: currentRole,
    setCurrentRole: setCurrentRole
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-content"
  }, view))), /*#__PURE__*/React.createElement(ToastStack, null));
}
function SettingsPlaceholder() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Notifications, webhook secrets, deploy windows. Placeholder in this prototype."))), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Settings live here"), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, "Real settings are out of scope for the UI kit. Navigate back to any other section to explore the prototype."))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/AuditLog.jsx
try { (() => {
/* Audit log / export view */

function AuditLog({
  navigate
}) {
  const {
    audit,
    users
  } = window.RMP_DATA;
  const [dateRange, setDateRange] = useState('30d');
  const [actorFilter, setActorFilter] = useState('all');
  const [actionFilter, setActionFilter] = useState('all');
  const filtered = audit.filter(e => {
    if (actorFilter !== 'all' && e.actor !== actorFilter) return false;
    if (actionFilter !== 'all' && !e.action.includes(actionFilter)) return false;
    return true;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Audit log"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Tamper-evident, append-only record of every action in RMP. Required for PCI DSS evidence.")), /*#__PURE__*/React.createElement("div", {
    className: "page-header-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export CSV"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "file-down"
  }, "Export PDF evidence"))), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filterbar"
  }, /*#__PURE__*/React.createElement("select", {
    className: "select",
    style: {
      width: 160,
      height: 32
    },
    value: dateRange,
    onChange: e => setDateRange(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "7d"
  }, "Last 7 days"), /*#__PURE__*/React.createElement("option", {
    value: "30d"
  }, "Last 30 days"), /*#__PURE__*/React.createElement("option", {
    value: "90d"
  }, "Last 90 days"), /*#__PURE__*/React.createElement("option", {
    value: "custom"
  }, "Custom range\u2026")), /*#__PURE__*/React.createElement("select", {
    className: "select",
    style: {
      width: 180,
      height: 32
    },
    value: actorFilter,
    onChange: e => setActorFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "All actors"), Object.values(users).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, u.name)), /*#__PURE__*/React.createElement("option", {
    value: "system"
  }, "System")), /*#__PURE__*/React.createElement("select", {
    className: "select",
    style: {
      width: 180,
      height: 32
    },
    value: actionFilter,
    onChange: e => setActionFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "All actions"), /*#__PURE__*/React.createElement("option", {
    value: "APPROVAL"
  }, "Approvals"), /*#__PURE__*/React.createElement("option", {
    value: "DEPLOY"
  }, "Deployments"), /*#__PURE__*/React.createElement("option", {
    value: "TICKET"
  }, "Ticket lifecycle"), /*#__PURE__*/React.createElement("option", {
    value: "STALE"
  }, "Stale-approval events"), /*#__PURE__*/React.createElement("option", {
    value: "SELF_BLOCKED"
  }, "Self-approval blocked")), /*#__PURE__*/React.createElement("span", {
    className: "fpill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hash",
    size: 12
  }), "Entity"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, filtered.length, " entries \xB7 cryptographically chained")), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 170
    }
  }, "Timestamp (UTC)"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 160
    }
  }, "Actor"), /*#__PURE__*/React.createElement("th", null, "Action"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 100
    }
  }, "Target"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "Source IP"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 100
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, filtered.map((e, i) => {
    const u = users[e.actor];
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      className: "mono",
      style: {
        fontSize: 11,
        color: 'var(--ink-600)'
      }
    }, e.ts), /*#__PURE__*/React.createElement("td", null, u ? /*#__PURE__*/React.createElement("div", {
      className: "row gap-2 items-center"
    }, /*#__PURE__*/React.createElement(Avatar, {
      user: u,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ink-800)'
      }
    }, u.name), /*#__PURE__*/React.createElement("span", {
      className: "caption",
      style: {
        fontSize: 10
      }
    }, u.role))) : /*#__PURE__*/React.createElement("span", {
      className: "caption row items-center gap-1"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cog",
      size: 12
    }), "System")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(AuditAction, {
      action: e.action
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "id"
    }, e.target)), /*#__PURE__*/React.createElement("td", {
      className: "mono caption"
    }, e.ip), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      icon: "external-link"
    }, "View")));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3 between items-center",
    style: {
      marginTop: 16,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "caption row items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 14,
    color: "var(--brand-600)"
  }), "Audit hash chain verified \u2014 last verification 4 min ago, all entries intact."), /*#__PURE__*/React.createElement("div", {
    className: "caption mono"
  }, "sha256: 8c4f\u2026b271")));
}
function AuditAction({
  action
}) {
  const meta = {
    APPROVAL_TECH_GRANTED: {
      label: 'Technical approval granted',
      icon: 'wrench',
      color: 'var(--brand-600)'
    },
    APPROVAL_BUSINESS_GRANTED: {
      label: 'Business approval granted',
      icon: 'briefcase',
      color: 'var(--brand-600)'
    },
    APPROVAL_FINAL_GRANTED: {
      label: 'Final approval granted',
      icon: 'shield-check',
      color: 'var(--brand-600)'
    },
    APPROVAL_SELF_BLOCKED: {
      label: 'Self-approval blocked by SoD',
      icon: 'shield-alert',
      color: 'var(--warning-600)'
    },
    TICKET_CREATED: {
      label: 'Ticket created',
      icon: 'file-plus',
      color: 'var(--ink-600)'
    },
    TICKET_SUBMITTED: {
      label: 'Ticket submitted for review',
      icon: 'send',
      color: 'var(--info-600)'
    },
    DEPLOYMENT_TRIGGERED: {
      label: 'Deployment triggered',
      icon: 'rocket',
      color: 'var(--warning-600)'
    },
    DEPLOYMENT_COMPLETED: {
      label: 'Deployment completed',
      icon: 'check-circle-2',
      color: 'var(--success-600)'
    },
    STALE_APPROVALS_DETECTED: {
      label: 'Stale approvals detected',
      icon: 'clock',
      color: 'var(--warning-600)'
    }
  };
  const m = meta[action] || {
    label: action,
    icon: 'circle',
    color: 'var(--ink-600)'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "row items-center gap-2",
    style: {
      fontSize: 13,
      color: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 14,
    color: m.color
  }), m.label);
}
Object.assign(window, {
  AuditLog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/AuditLog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/CreateTicket.jsx
try { (() => {
/* Create RM Ticket — multi-step form */

function CreateTicket({
  navigate,
  currentRole
}) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    title: '',
    mrUrl: 'https://bitbucket.org/global/payments-api/pull-requests/248',
    jiraId: 'PROJ-1204',
    service: 'payments-api',
    env: 'production',
    ip: '10.42.8.3',
    port: '8080',
    namespace: 'payments-prod',
    deployType: 'rolling',
    deployWindow: '',
    impact: '',
    rollback: '',
    emergency: false,
    validation: ['Synthetic transaction succeeds', 'Error rate < 0.5% sustained for 5m']
  });
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const steps = [{
    id: 'link',
    label: 'Link work',
    icon: 'git-pull-request'
  }, {
    id: 'target',
    label: 'Target service',
    icon: 'server'
  }, {
    id: 'impact',
    label: 'Impact & rollback',
    icon: 'shield-check'
  }, {
    id: 'review',
    label: 'Review & submit',
    icon: 'check-circle-2'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "New RM Ticket"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "A production deployment requires this ticket. It collects everything approvers need in one place.")), /*#__PURE__*/React.createElement("div", {
    className: "page-header-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => navigate('#/')
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "save"
  }, "Save draft"))), /*#__PURE__*/React.createElement("div", {
    className: "surface",
    style: {
      marginBottom: 20,
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("div", {
    className: `step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, i < step ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }) : i + 1), /*#__PURE__*/React.createElement("div", {
    className: "step-label"
  }, s.label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: `step-bar ${i < step ? 'done' : ''}`
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface surface-lg",
    style: {
      minHeight: 480
    }
  }, step === 0 && /*#__PURE__*/React.createElement(StepLink, {
    form: form,
    set: set
  }), step === 1 && /*#__PURE__*/React.createElement(StepTarget, {
    form: form,
    set: set
  }), step === 2 && /*#__PURE__*/React.createElement(StepImpact, {
    form: form,
    set: set
  }), step === 3 && /*#__PURE__*/React.createElement(StepReview, {
    form: form
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--ink-100)',
      margin: '24px -22px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "row between",
    style: {
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    disabled: step === 0,
    onClick: () => setStep(step - 1)
  }, "Back"), step < steps.length - 1 ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: () => setStep(step + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "send",
    onClick: () => {
      showToast('RM-1044 submitted for Technical Approval');
      navigate('#/');
    }
  }, "Submit for Technical Approval"))), /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Workflow"), /*#__PURE__*/React.createElement(ApprovalChainPreview, {
    emergency: form.emergency
  })), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap-2 items-start"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lightbulb",
    size: 16,
    color: "var(--warning-600)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fw600",
    style: {
      fontSize: 13,
      color: 'var(--ink-800)',
      marginBottom: 4
    }
  }, "Why so much detail?"), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      lineHeight: 1.5
    }
  }, "Auditors review every production change. The more context this ticket carries, the faster approvers can decide \u2014 and the cleaner your audit evidence.")))), form.emergency && /*#__PURE__*/React.createElement(Banner, {
    tone: "emergency",
    title: "Emergency / Hotfix flow"
  }, "All three approvers are paged immediately on Slack & SMS. CTO can use single-stage emergency approval."))));
}
function StepLink({
  form,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 4
    }
  }, "Step 1"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--ink-800)',
      letterSpacing: '-0.015em'
    }
  }, "What are you deploying?"), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      marginTop: 4
    }
  }, "Paste a Bitbucket MR URL and we'll auto-fetch the title, commits, and CI status.")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Bitbucket MR URL ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    value: form.mrUrl,
    onChange: e => set('mrUrl', e.target.value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "hint row items-center gap-1",
    style: {
      color: 'var(--success-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 12
  }), " Fetched: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--brand-700)'
    }
  }, "!248 \xB7 feat: tighten retry budget for upstream failures"), " \xB7 4 commits \xB7 CI passing")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Jira issue ID"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    value: form.jiraId,
    onChange: e => set('jiraId', e.target.value),
    placeholder: "PROJ-1234"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hint row items-center gap-1",
    style: {
      color: 'var(--info-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 12
  }), " ", form.jiraId, " \xB7 \"Stripe retry budget tuning\" \xB7 In Progress")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Ticket title ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Defaults to MR title \u2014 override if you want approver-friendly framing",
    value: form.title || 'Promote payments-api v2.14.4 — retry budget tightening',
    onChange: e => set('title', e.target.value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, "Approvers see this in their queue. Aim for \"service \xB7 what \xB7 why\" in under 80 chars.")));
}
function StepTarget({
  form,
  set
}) {
  const {
    services
  } = window.RMP_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 4
    }
  }, "Step 2"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--ink-800)',
      letterSpacing: '-0.015em'
    }
  }, "Where does it deploy?"), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      marginTop: 4
    }
  }, "From the service catalog \u2014 values are pre-filled from your MR's deployment manifest.")), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("label", null, "Service ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    className: "select",
    value: form.service,
    onChange: e => set('service', e.target.value)
  }, services.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", null, "Environment"), /*#__PURE__*/React.createElement("select", {
    className: "select",
    value: form.env,
    onChange: e => set('env', e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "production")), /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, "RMP only manages production."))), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("label", null, "Namespace"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    value: form.namespace,
    onChange: e => set('namespace', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", null, "IP"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    value: form.ip,
    onChange: e => set('ip', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", null, "Port"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    value: form.port,
    onChange: e => set('port', e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", null, "Deployment strategy"), /*#__PURE__*/React.createElement("select", {
    className: "select",
    value: form.deployType,
    onChange: e => set('deployType', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "rolling"
  }, "Rolling"), /*#__PURE__*/React.createElement("option", {
    value: "blue-green"
  }, "Blue / Green"), /*#__PURE__*/React.createElement("option", {
    value: "recreate"
  }, "Recreate (downtime)"))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", null, "Deployment window"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "e.g. Today 18:00\u201319:00 UTC",
    value: form.deployWindow,
    onChange: e => set('deployWindow', e.target.value)
  }))));
}
function StepImpact({
  form,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 4
    }
  }, "Step 3"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--ink-800)',
      letterSpacing: '-0.015em'
    }
  }, "What's the impact, and how do we roll back?"), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      marginTop: 4
    }
  }, "Approvers will read these closely. Be specific about user-facing surfaces and the worst case.")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Business impact ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: "4",
    placeholder: "What user-facing behavior changes? Estimated blast radius? Any data-migration concerns?",
    value: form.impact,
    onChange: e => set('impact', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Rollback plan ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: "3",
    placeholder: "How do we get back to the previous state? How long does that take? Are there irreversible steps?",
    value: form.rollback,
    onChange: e => set('rollback', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Post-deployment validation checklist"), /*#__PURE__*/React.createElement("div", {
    className: "col gap-2"
  }, form.validation.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "row gap-2 items-center",
    key: i
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: v,
    onChange: e => {
      const next = [...form.validation];
      next[i] = e.target.value;
      set('validation', next);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "x",
    onClick: () => set('validation', form.validation.filter((_, idx) => idx !== i))
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "plus",
    onClick: () => set('validation', [...form.validation, ''])
  }, "Add check"))), /*#__PURE__*/React.createElement("label", {
    className: "row items-center gap-2",
    style: {
      padding: '12px 14px',
      background: form.emergency ? 'var(--emergency-50)' : 'var(--ink-25)',
      border: `1px solid ${form.emergency ? 'var(--emergency-100)' : 'var(--ink-100)'}`,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.emergency,
    onChange: e => set('emergency', e.target.checked),
    style: {
      accentColor: 'var(--emergency-500)',
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 16,
    color: form.emergency ? 'var(--emergency-600)' : 'var(--ink-500)'
  }), /*#__PURE__*/React.createElement("div", {
    className: "grow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-800)',
      fontWeight: 500
    }
  }, "Mark as emergency / hotfix"), /*#__PURE__*/React.createElement("div", {
    className: "caption"
  }, "Pages all three approvers immediately. CTO may grant single-stage emergency approval. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--emergency-700)'
    }
  }, "All emergency deploys are reviewed weekly.")))));
}
function StepReview({
  form
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 4
    }
  }, "Step 4"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--ink-800)',
      letterSpacing: '-0.015em'
    }
  }, "Looks good?"), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      marginTop: 4
    }
  }, "Submitting will notify your Team Lead for Technical Approval. You won't be able to approve your own ticket.")), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad",
    style: {
      background: 'var(--ink-25)'
    }
  }, /*#__PURE__*/React.createElement("dl", {
    className: "meta-grid"
  }, /*#__PURE__*/React.createElement("dt", null, "Title"), "      ", /*#__PURE__*/React.createElement("dd", null, form.title || 'Promote payments-api v2.14.4 — retry budget tightening'), /*#__PURE__*/React.createElement("dt", null, "MR"), "         ", /*#__PURE__*/React.createElement("dd", {
    className: "mono"
  }, "!248 \xB7 payments-api"), /*#__PURE__*/React.createElement("dt", null, "Jira"), "       ", /*#__PURE__*/React.createElement("dd", {
    className: "mono"
  }, form.jiraId), /*#__PURE__*/React.createElement("dt", null, "Service"), "    ", /*#__PURE__*/React.createElement("dd", {
    className: "mono"
  }, form.service, " \xB7 ", form.namespace), /*#__PURE__*/React.createElement("dt", null, "Target"), "     ", /*#__PURE__*/React.createElement("dd", {
    className: "mono"
  }, form.ip, ":", form.port), /*#__PURE__*/React.createElement("dt", null, "Strategy"), "   ", /*#__PURE__*/React.createElement("dd", null, form.deployType, " \xB7 ", form.deployWindow || 'window TBD'), /*#__PURE__*/React.createElement("dt", null, "Emergency"), "  ", /*#__PURE__*/React.createElement("dd", null, form.emergency ? 'Yes' : 'No'))), /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "What happens next",
    icon: "info"
  }, "Marcus Chen (your Team Lead) will be notified on Slack and email within seconds. Median time to Technical Approval is currently ", /*#__PURE__*/React.createElement("strong", null, "~38 minutes"), "."));
}
function ApprovalChainPreview({
  emergency
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col gap-2"
  }, /*#__PURE__*/React.createElement(ChainStep, {
    icon: "wrench",
    label: "Technical Approval",
    who: "Team Lead"
  }), /*#__PURE__*/React.createElement(ChainArrow, null), /*#__PURE__*/React.createElement(ChainStep, {
    icon: "briefcase",
    label: "Business Approval",
    who: "Product Manager"
  }), /*#__PURE__*/React.createElement(ChainArrow, null), /*#__PURE__*/React.createElement(ChainStep, {
    icon: "shield-check",
    label: "Final Approval",
    who: "CTO",
    emphasis: emergency
  }), /*#__PURE__*/React.createElement(ChainArrow, null), /*#__PURE__*/React.createElement(ChainStep, {
    icon: "rocket",
    label: "Deployment",
    who: "Release Engineer"
  }));
}
function ChainStep({
  icon,
  label,
  who,
  emphasis
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row items-center gap-2",
    style: {
      padding: '7px 10px',
      background: emphasis ? 'var(--emergency-50)' : 'var(--ink-25)',
      border: `1px solid ${emphasis ? 'var(--emergency-100)' : 'var(--ink-100)'}`,
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: emphasis ? 'var(--emergency-600)' : 'var(--ink-500)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--ink-800)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      whiteSpace: 'nowrap'
    }
  }, who)));
}
function ChainArrow() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 8,
      background: 'var(--ink-200)',
      marginLeft: 17
    }
  });
}
Object.assign(window, {
  CreateTicket
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/CreateTicket.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/Dashboard.jsx
try { (() => {
/* Personal Dashboard */

function Dashboard({
  navigate,
  currentRole
}) {
  const {
    tickets,
    users
  } = window.RMP_DATA;
  const me = users[currentRole.userId];

  // Compute awaiting-me list based on role
  const awaitingMe = useMemo(() => {
    const list = [];
    if (me.role === 'Team Lead') {
      tickets.forEach(t => {
        if (t.status === 'PENDING_TECH_REVIEW' && t.author !== me.id) list.push(t);
      });
    }
    if (me.role === 'Product Manager') {
      tickets.forEach(t => {
        if (t.status === 'PENDING_BUSINESS_REVIEW') list.push(t);
      });
    }
    if (me.role === 'CTO') {
      tickets.forEach(t => {
        if (t.status === 'PENDING_FINAL_APPROVAL') list.push(t);
      });
    }
    if (me.role === 'Release Engineer') {
      tickets.forEach(t => {
        if (t.status === 'APPROVED' || t.status === 'DEPLOYING') list.push(t);
      });
    }
    if (me.role === 'Developer') {
      tickets.forEach(t => {
        if (t.status === 'CHANGES_REQUESTED' && t.author === me.id) list.push(t);
      });
    }
    return list;
  }, [me.id, me.role]);
  const myDrafts = tickets.filter(t => t.author === me.id && t.status === 'DRAFT');
  const myActive = tickets.filter(t => t.author === me.id && !['CLOSED', 'REJECTED', 'CANCELLED', 'DEPLOYED', 'ROLLED_BACK'].includes(t.status));
  const recentlyDeployed = tickets.filter(t => t.status === 'DEPLOYED').slice(0, 4);
  const greeting = `Welcome back, ${me.name.split(' ')[0]}.`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, greeting), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, awaitingMe.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, "You have ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-800)'
    }
  }, awaitingMe.length), " ", awaitingMe.length === 1 ? 'ticket' : 'tickets', " waiting on you as ", me.role, ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "Nothing waiting on you as ", me.role, ". Caught up."))), /*#__PURE__*/React.createElement("div", {
    className: "page-header-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "search"
  }, "Search"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: () => navigate('#/new')
  }, "New RM Ticket"))), /*#__PURE__*/React.createElement("div", {
    className: "surface",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row items-center gap-3"
  }, /*#__PURE__*/React.createElement("h3", null, "Awaiting your action"), /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: awaitingMe.length ? 'var(--info-50)' : 'var(--ink-50)',
      color: awaitingMe.length ? 'var(--info-700)' : 'var(--ink-500)'
    }
  }, awaitingMe.length, " ", awaitingMe.length === 1 ? 'item' : 'items')), /*#__PURE__*/React.createElement("div", {
    className: "meta row items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12
  }), " Updated 12s ago")), awaitingMe.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Nothing waiting on you"), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, "When teammates submit tickets that need ", me.role, " review, they'll land here."))) : /*#__PURE__*/React.createElement("div", null, awaitingMe.map(t => /*#__PURE__*/React.createElement(AwaitingRow, {
    key: t.id,
    ticket: t,
    navigate: navigate,
    role: me.role
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "My active tickets"), /*#__PURE__*/React.createElement("a", {
    className: "meta",
    href: "#/tickets",
    onClick: e => {
      e.preventDefault();
      navigate('#/tickets');
    }
  }, "View all \u2192")), myActive.length === 0 ? /*#__PURE__*/React.createElement(EmptyMini, {
    line: "You have no tickets in flight."
  }) : myActive.slice(0, 5).map(t => /*#__PURE__*/React.createElement(TicketRow, {
    key: t.id,
    ticket: t,
    navigate: navigate
  })), myDrafts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px',
      fontSize: 12,
      color: 'var(--ink-500)',
      borderTop: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-edit",
    size: 12
  }), ' ', myDrafts.length, " draft", myDrafts.length > 1 ? 's' : '', " not yet submitted")), /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Recently deployed"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "last 24h")), recentlyDeployed.map(t => /*#__PURE__*/React.createElement(TicketRow, {
    key: t.id,
    ticket: t,
    navigate: navigate,
    minimal: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row between items-center",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "This week"), /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 12,
    color: "var(--ink-400)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row gap-6"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Deployed",
    value: "11",
    tone: "ok"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Rolled back",
    value: "1",
    tone: "warn"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Avg approval",
    value: "3.2h",
    tone: ""
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Emergency",
    value: "2",
    tone: "emergency"
  }))))));
}
function AwaitingRow({
  ticket,
  navigate,
  role
}) {
  const author = window.RMP_DATA.users[ticket.author];
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => navigate(`#/ticket/${ticket.id}`),
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      gap: 14,
      padding: '14px 18px',
      borderTop: '1px solid var(--ink-100)',
      cursor: 'pointer',
      alignItems: 'center'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ink-25)',
    onMouseLeave: e => e.currentTarget.style.background = ''
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 13,
      color: ticket.emergency ? 'var(--emergency-700)' : 'var(--brand-700)',
      fontWeight: 600
    }
  }, ticket.id), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-800)',
      fontWeight: 500,
      marginBottom: 4
    }
  }, ticket.emergency && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: '1px 5px',
      borderRadius: 2,
      background: 'var(--emergency-100)',
      color: 'var(--emergency-700)',
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginRight: 6,
      verticalAlign: 1
    }
  }, "EMERGENCY"), ticket.title), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3 items-center",
    style: {
      fontSize: 11,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row items-center gap-1"
  }, /*#__PURE__*/React.createElement(Avatar, {
    user: author,
    size: "sm"
  }), author.name), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, ticket.service), ticket.mr && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "!", ticket.mr.num)), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, ticket.createdAt))), /*#__PURE__*/React.createElement("div", {
    className: "row gap-2 items-center"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: ticket.status
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: e => {
      e.stopPropagation();
      navigate(`#/ticket/${ticket.id}`);
    }
  }, "Review")));
}
function TicketRow({
  ticket,
  navigate,
  minimal
}) {
  const author = window.RMP_DATA.users[ticket.author];
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => navigate(`#/ticket/${ticket.id}`),
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      gap: 10,
      padding: '11px 18px',
      borderTop: '1px solid var(--ink-100)',
      cursor: 'pointer',
      alignItems: 'center'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ink-25)',
    onMouseLeave: e => e.currentTarget.style.background = ''
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 12,
      color: 'var(--brand-700)',
      fontWeight: 600
    }
  }, ticket.id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-800)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, ticket.title), /*#__PURE__*/React.createElement("div", {
    className: "row gap-2 items-center"
  }, !minimal && author && /*#__PURE__*/React.createElement(Avatar, {
    user: author,
    size: "sm"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: ticket.status
  })));
}
function Stat({
  label,
  value,
  tone
}) {
  const colors = {
    ok: 'var(--brand-700)',
    warn: 'var(--warning-700)',
    emergency: 'var(--emergency-700)'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "col gap-1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: colors[tone] || 'var(--ink-800)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "caption"
  }, label));
}
function EmptyMini({
  line
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--ink-100)',
      textAlign: 'center',
      color: 'var(--ink-500)',
      fontSize: 12
    }
  }, line);
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/DeployView.jsx
try { (() => {
/* Deployment Execution view */

const PIPELINE_STEPS = [{
  id: 'pre',
  label: 'Pre-flight checks'
}, {
  id: 'build',
  label: 'Build image'
}, {
  id: 'scan',
  label: 'Vuln scan'
}, {
  id: 'canary',
  label: 'Canary 5%'
}, {
  id: 'promote',
  label: 'Promote to 100%'
}, {
  id: 'verify',
  label: 'Health verify'
}];
function DeployView({
  ticketId,
  navigate,
  currentRole
}) {
  const {
    tickets,
    users
  } = window.RMP_DATA;
  const ticket = tickets.find(t => t.id === ticketId) || tickets.find(t => t.status === 'DEPLOYING') || tickets[3];
  const me = users[currentRole.userId];

  // simulate progress
  const [progress, setProgress] = useState(2); // 0..6
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running) return;
    if (progress >= PIPELINE_STEPS.length) return;
    const id = setTimeout(() => setProgress(p => p + 1), 2400);
    return () => clearTimeout(id);
  }, [progress, running]);
  const complete = progress >= PIPELINE_STEPS.length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate(`#/ticket/${ticket.id}`);
    },
    className: "row items-center gap-1 caption",
    style: {
      color: 'var(--ink-500)',
      marginBottom: 6,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 12
  }), " Back to ", ticket.id), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3 items-center",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono fw600",
    style: {
      fontSize: 14,
      color: 'var(--brand-700)'
    }
  }, ticket.id), /*#__PURE__*/React.createElement(StatusBadge, {
    status: complete ? 'DEPLOYED' : 'DEPLOYING',
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "muted f12"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "Triggered by ", /*#__PURE__*/React.createElement(Avatar, {
    user: me,
    size: "sm"
  }), " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-700)'
    }
  }, me.name), " \xB7 2 min ago")), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 0
    }
  }, ticket.title)), /*#__PURE__*/React.createElement("div", {
    className: "page-header-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "external-link"
  }, "Pipeline in Bitbucket"), !complete ? /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "square"
  }, "Abort") : /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "undo-2"
  }, "Rollback"))), /*#__PURE__*/React.createElement("div", {
    className: "surface",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pipeline-steps"
  }, PIPELINE_STEPS.map((s, i) => {
    const state = i < progress ? 'done' : i === progress ? 'run' : 'queued';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.id
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      className: "psep"
    }), /*#__PURE__*/React.createElement("span", {
      className: `pstep ${state}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "pd"
    }), s.label, state === 'done' && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 10
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head",
    style: {
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal",
    size: 14,
    color: "#9aa6b8"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: 'var(--font-mono)',
      color: '#c9d3e1'
    }
  }, "pipeline \xB7 build #4382")), /*#__PURE__*/React.createElement("div", {
    className: "row items-center gap-3 f12",
    style: {
      color: '#6b7588'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Live"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: complete ? '#6ed99e' : '#f0b958',
      animation: complete ? '' : 'chip-pulse 1.2s ease-in-out infinite'
    }
  }))), /*#__PURE__*/React.createElement("pre", {
    className: "term",
    style: {
      margin: 0,
      borderRadius: '0 0 var(--radius-md) var(--radius-md)'
    }
  }, progress >= 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:42:01]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "step-line"
  }, "\u25B8 Pre-flight checks"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:42:01]"), " RM ticket signature verified ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:42:02]"), " Three approvals on file ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:42:02]"), " No stale MR commits since approval ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:42:03]"), " Deploy window: open ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n'), progress >= 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:42:08]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "step-line"
  }, "\u25B8 Build image"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:42:09]"), " docker build . --target=production", '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:43:12]"), " pushed registry.global.uz/", ticket.service, ":v2.14.3 ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n'), progress >= 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:43:14]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "step-line"
  }, "\u25B8 Vulnerability scan"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:43:48]"), " trivy: 0 critical, 2 medium (allowlisted) ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n'), progress >= 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:43:50]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "step-line"
  }, "\u25B8 Canary rollout (5%)"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:43:52]"), " kubectl rollout: canary set to 1/20 pods", '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:44:18]"), " p99 latency: 187ms ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:44:19]"), " error rate: 0.18% ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n'), progress >= 5 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:44:22]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "step-line"
  }, "\u25B8 Promote to 100%"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:44:23]"), " scaling: 1 \u2192 20 replicas", '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:45:01]"), " rollout complete ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n'), progress >= 6 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:45:03]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "step-line"
  }, "\u25B8 Health verify"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:45:18]"), " all readiness probes green (20/20) ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:45:19]"), " synthetic /v1/charge: 200 OK in 142ms ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713"), '\n', /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "[14:45:20]"), " ", /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, "\u2713 Deployment complete"), '\n'), !complete && /*#__PURE__*/React.createElement("span", {
    className: "warn"
  }, "\u258D"))), complete && /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    title: "Deployment complete",
    icon: "check-circle-2"
  }, ticket.service, " is serving v2.14.3 to 100% of production traffic. Complete the post-deployment validation checklist on the ticket to close it.")), /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Live metrics"), /*#__PURE__*/React.createElement(Metric, {
    label: "Error rate",
    value: "0.18%",
    tone: "ok",
    trend: "\u2193 baseline 0.34%"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "p99 latency",
    value: "187 ms",
    tone: "ok",
    trend: "\u2193 baseline 220ms"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "RPS",
    value: "1,420",
    tone: "",
    trend: "\u2192 steady"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Pods healthy",
    value: complete ? '20 / 20' : `${Math.min(20, Math.floor(progress / 6 * 20) + 1)} / 20`,
    tone: "ok"
  })), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Rollback ready"), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      marginBottom: 12,
      lineHeight: 1.5
    }
  }, "Previous version ", /*#__PURE__*/React.createElement("code", {
    className: "mono",
    style: {
      color: 'var(--brand-700)'
    }
  }, "v2.14.2"), " is held in the registry. Rollback takes ~90s."), /*#__PURE__*/React.createElement(Button, {
    variant: "danger-secondary",
    icon: "undo-2",
    size: "sm"
  }, "Initiate rollback")), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Demo controls"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: running ? 'pause' : 'play',
    onClick: () => setRunning(!running)
  }, running ? 'Pause simulation' : 'Resume simulation'), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "rotate-ccw",
    onClick: () => {
      setProgress(0);
      setRunning(true);
    },
    style: {
      marginTop: 6
    }
  }, "Reset")))));
}
function Metric({
  label,
  value,
  tone,
  trend
}) {
  const colors = {
    ok: 'var(--success-700)',
    warn: 'var(--warning-700)',
    err: 'var(--danger-700)'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "row between items-baseline",
    style: {
      padding: '8px 0',
      borderBottom: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, label), trend && /*#__PURE__*/React.createElement("span", {
    className: "caption",
    style: {
      fontSize: 10,
      color: 'var(--ink-400)'
    }
  }, trend)), /*#__PURE__*/React.createElement("div", {
    className: "mono fw600",
    style: {
      color: colors[tone] || 'var(--ink-800)',
      fontSize: 14
    }
  }, value));
}
Object.assign(window, {
  DeployView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/DeployView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/Shell.jsx
try { (() => {
/* TopBar + Sidebar */

function TopBar({
  currentRole,
  setCurrentRole
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "28",
    height: "28",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "word"
  }, "Release", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("div", {
    className: "topbar-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    className: "si"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search RM-\u2026, services, MRs, users\u2026"
  }), /*#__PURE__*/React.createElement("span", {
    className: "kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    className: "topbar-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar-health",
    title: "Integration health \xB7 checked every 30s"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "d ok"
  }), "Bitbucket"), /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "d ok"
  }), "Jira"), /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "d warn"
  }), "Pipelines")), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    "aria-label": "Notifications",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    "aria-label": "Help"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-help",
    size: 16
  })), /*#__PURE__*/React.createElement(Avatar, {
    user: window.RMP_DATA.users[currentRole.userId]
  })));
}
function Sidebar({
  route,
  navigate,
  currentRole,
  setCurrentRole
}) {
  const items = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard',
    route: '#/'
  }, {
    id: 'tickets',
    label: 'All Tickets',
    icon: 'ticket',
    route: '#/tickets',
    count: 14
  }, {
    id: 'create',
    label: 'New ticket',
    icon: 'plus-circle',
    route: '#/new'
  }];
  const ops = [{
    id: 'deploys',
    label: 'Deployments',
    icon: 'rocket',
    route: '#/deploy/RM-1040',
    count: 1
  }, {
    id: 'audit',
    label: 'Audit log',
    icon: 'history',
    route: '#/audit'
  }];
  const admin = [{
    id: 'admin',
    label: 'Users & roles',
    icon: 'users-round',
    route: '#/admin'
  }, {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    route: '#/settings'
  }];
  const NavItem = ({
    it
  }) => /*#__PURE__*/React.createElement("a", {
    className: `nav-item ${route === it.route || it.route !== '#/' && route.startsWith(it.route) ? 'active' : ''}`,
    href: it.route,
    onClick: e => {
      e.preventDefault();
      navigate(it.route);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16
  }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, it.count));
  return /*#__PURE__*/React.createElement("div", {
    className: "sidebar"
  }, items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    it: it
  })), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-section"
  }, "Operations"), ops.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    it: it
  })), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-section"
  }, "Admin"), admin.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    it: it
  })), /*#__PURE__*/React.createElement("div", {
    className: "role-switcher"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-cog",
    size: 12
  }), "View as"), /*#__PURE__*/React.createElement("select", {
    value: currentRole.userId,
    onChange: e => setCurrentRole({
      userId: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "jess"
  }, "Jess Donovan \xB7 Developer"), /*#__PURE__*/React.createElement("option", {
    value: "marcus"
  }, "Marcus Chen \xB7 Team Lead"), /*#__PURE__*/React.createElement("option", {
    value: "priya"
  }, "Priya Anand \xB7 Product Manager"), /*#__PURE__*/React.createElement("option", {
    value: "anya"
  }, "Anya Volkov \xB7 CTO"), /*#__PURE__*/React.createElement("option", {
    value: "diego"
  }, "Diego Mart\xEDn \xB7 Release Engineer"), /*#__PURE__*/React.createElement("option", {
    value: "farah"
  }, "Farah Idris \xB7 Auditor")), /*#__PURE__*/React.createElement("div", {
    className: "h"
  }, "Switching role re-renders action permissions across the prototype.")));
}
Object.assign(window, {
  TopBar,
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/TicketDetail.jsx
try { (() => {
/* RM Ticket Detail — the most-used screen */

function TicketDetail({
  ticketId,
  navigate,
  currentRole,
  mutateTicket
}) {
  const {
    tickets,
    users
  } = window.RMP_DATA;
  const ticket = tickets.find(t => t.id === ticketId);
  const me = users[currentRole.userId];
  const [approvalModal, setApprovalModal] = useState(null); // 'approve' | 'reject' | 'changes' | null
  const [showStaleDemo, setShowStaleDemo] = useState(false);
  if (!ticket) {
    return /*#__PURE__*/React.createElement("div", {
      className: "surface surface-pad"
    }, "Ticket not found.");
  }
  const author = users[ticket.author];
  const isAuthor = ticket.author === me.id;

  // Determine if current user can act
  const canApproveStage = (() => {
    if (isAuthor) return null; // SoD blocked
    if (ticket.status === 'PENDING_TECH_REVIEW' && me.role === 'Team Lead') return 'tech';
    if (ticket.status === 'PENDING_BUSINESS_REVIEW' && me.role === 'Product Manager') return 'business';
    if (ticket.status === 'PENDING_FINAL_APPROVAL' && me.role === 'CTO') return 'final';
    return null;
  })();
  const canDeploy = ticket.status === 'APPROVED' && me.role === 'Release Engineer' && !isAuthor;
  const canRollback = ticket.status === 'DEPLOYED' && me.role === 'Release Engineer';
  const canClose = ticket.status === 'DEPLOYED' && me.role === 'Release Engineer';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap-3 items-center",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      color: ticket.emergency ? 'var(--emergency-700)' : 'var(--brand-700)',
      fontWeight: 600
    }
  }, ticket.id), ticket.emergency && /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: 'var(--emergency-100)',
      color: 'var(--emergency-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 10
  }), " Emergency / Hotfix"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: ticket.status,
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "muted f12"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "muted f12 row items-center gap-1"
  }, "Opened by ", /*#__PURE__*/React.createElement(Avatar, {
    user: author,
    size: "sm"
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-700)'
    }
  }, author.name), " ", ticket.createdAt)), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 0
    }
  }, ticket.title)), /*#__PURE__*/React.createElement("div", {
    className: "page-header-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "external-link"
  }, "Open MR"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "more-horizontal"
  }))), isAuthor && ticket.status.startsWith('PENDING_') && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SodBlockedCard, {
    ticket: ticket,
    me: me
  })), showStaleDemo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    icon: "clock",
    title: "Approvals are stale \u2014 MR was updated after sign-off",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowStaleDemo(false)
    }, "Re-request all approvals")
  }, "Two new commits landed on ", /*#__PURE__*/React.createElement("code", {
    className: "mono",
    style: {
      color: 'var(--warning-700)'
    }
  }, "!", ticket.mr?.num), " after Final Approval. Per PCI DSS, all three approvers must re-confirm before this can deploy.")), (canApproveStage || canDeploy || canRollback || canClose) && /*#__PURE__*/React.createElement("div", {
    className: "surface surface-lg",
    style: {
      marginBottom: 20,
      borderLeft: '3px solid var(--brand-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row between items-start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Your action"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--ink-800)',
      letterSpacing: '-0.01em'
    }
  }, canApproveStage === 'tech' && 'Technical Approval needed', canApproveStage === 'business' && 'Business Approval needed', canApproveStage === 'final' && 'Final Approval needed', canDeploy && 'Ready to deploy', canRollback && 'Deployment live — rollback available', canClose && 'Close ticket'), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      marginTop: 4,
      maxWidth: 480
    }
  }, canApproveStage && /*#__PURE__*/React.createElement(React.Fragment, null, "Review the MR diff, business impact, and rollback plan before approving. You can request changes if anything is unclear."), canDeploy && /*#__PURE__*/React.createElement(React.Fragment, null, "Three approvals received. This will trigger the deploy pipeline against ", /*#__PURE__*/React.createElement("code", {
    className: "mono",
    style: {
      color: 'var(--brand-700)'
    }
  }, ticket.service), "."), canRollback && /*#__PURE__*/React.createElement(React.Fragment, null, "Validation checklist still incomplete. Roll back if metrics indicate regression."))), /*#__PURE__*/React.createElement("div", {
    className: "row gap-2"
  }, canApproveStage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "danger-secondary",
    icon: "rotate-ccw",
    onClick: () => setApprovalModal('changes')
  }, "Request changes"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "x",
    onClick: () => setApprovalModal('reject')
  }, "Reject"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check",
    size: "lg",
    onClick: () => setApprovalModal('approve')
  }, "Approve ", canApproveStage === 'final' ? '— Final' : canApproveStage === 'business' ? '— Business' : '— Technical')), canDeploy && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "rocket",
    onClick: () => navigate(`#/deploy/${ticket.id}`)
  }, "Trigger deploy"), canRollback && /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "undo-2"
  }, "Rollback"), canClose && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check"
  }, "Close ticket")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Approval chain"), /*#__PURE__*/React.createElement("div", {
    className: "meta row items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 12
  }), " Segregation of duties enforced")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "approvals-row"
  }, /*#__PURE__*/React.createElement(ApprovalStage, {
    stage: "Technical",
    step: ticket.approvals.tech,
    users: users
  }), /*#__PURE__*/React.createElement(ApprovalStage, {
    stage: "Business",
    step: ticket.approvals.business,
    users: users
  }), /*#__PURE__*/React.createElement(ApprovalStage, {
    stage: "Final",
    step: ticket.approvals.final,
    users: users
  })))), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Linked Bitbucket MR"), /*#__PURE__*/React.createElement("a", {
    className: "meta row items-center gap-1",
    href: "#",
    onClick: e => e.preventDefault()
  }, "!", ticket.mr.num, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    className: "surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap-3 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row items-center gap-2",
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-pull-request",
    size: 20,
    color: "var(--brand-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-800)',
      fontWeight: 500,
      marginBottom: 4
    }
  }, ticket.mr.title), /*#__PURE__*/React.createElement("div", {
    className: "mono caption"
  }, ticket.mr.repo, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-700)'
    }
  }, ticket.mr.branch), " \xB7 ", ticket.mr.commits, " commits \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--success-600)'
    }
  }, "+", ticket.mr.additions), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-600)'
    }
  }, "\u2212", ticket.mr.deletions))), /*#__PURE__*/React.createElement("div", {
    className: "chip",
    style: {
      background: 'var(--success-50)',
      color: 'var(--success-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11
  }), " CI passing")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--ink-100)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3 items-start"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 20,
    color: "var(--info-600)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--info-700)',
      fontWeight: 600
    }
  }, ticket.jira.id), " \xB7 ", ticket.jira.title)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "row items-center gap-1 f12",
    style: {
      color: 'var(--info-600)'
    }
  }, "Open in Jira ", /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 12
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Business impact")), /*#__PURE__*/React.createElement("div", {
    className: "surface-pad"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-700)',
      lineHeight: 1.6,
      margin: 0
    }
  }, ticket.impact))), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Rollback plan"), /*#__PURE__*/React.createElement("span", {
    className: "meta row items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "undo-2",
    size: 12
  }), " Required by policy")), /*#__PURE__*/React.createElement("div", {
    className: "surface-pad"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-700)',
      lineHeight: 1.6,
      margin: 0
    }
  }, ticket.rollback))), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Post-deployment validation"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, ticket.validation.filter(v => v.done).length, " / ", ticket.validation.length, " complete")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, ticket.validation.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row items-center gap-3",
    style: {
      padding: '8px 18px',
      borderTop: i === 0 ? 'none' : '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: v.done,
    disabled: ticket.status !== 'DEPLOYED',
    style: {
      accentColor: 'var(--brand-500)',
      width: 14,
      height: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: v.done ? 'var(--ink-500)' : 'var(--ink-800)',
      textDecoration: v.done ? 'line-through' : 'none'
    }
  }, v.label))))), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Activity"), /*#__PURE__*/React.createElement("div", {
    className: "row gap-2 items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, ticket.timeline.length, " events"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "download"
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(Timeline, {
    events: ticket.timeline
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Deployment target"), /*#__PURE__*/React.createElement("dl", {
    className: "meta-grid"
  }, /*#__PURE__*/React.createElement("dt", null, "Service"), "      ", /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("code", {
    className: "mono"
  }, ticket.service)), /*#__PURE__*/React.createElement("dt", null, "Environment"), "  ", /*#__PURE__*/React.createElement("dd", null, ticket.env), /*#__PURE__*/React.createElement("dt", null, "Namespace"), "    ", /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("code", {
    className: "mono"
  }, ticket.namespace)), /*#__PURE__*/React.createElement("dt", null, "IP : port"), "    ", /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("code", {
    className: "mono"
  }, ticket.ip, ":", ticket.port)), /*#__PURE__*/React.createElement("dt", null, "Strategy"), "     ", /*#__PURE__*/React.createElement("dd", null, ticket.deployType), /*#__PURE__*/React.createElement("dt", null, "Window"), "       ", /*#__PURE__*/React.createElement("dd", null, ticket.deployWindow))), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "People"), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, /*#__PURE__*/React.createElement(PersonRow, {
    label: "Author",
    user: author
  }), /*#__PURE__*/React.createElement(PersonRow, {
    label: "Tech reviewer",
    user: users[ticket.approvals.tech.user],
    state: ticket.approvals.tech.state
  }), /*#__PURE__*/React.createElement(PersonRow, {
    label: "Business",
    user: users[ticket.approvals.business.user],
    state: ticket.approvals.business.state
  }), /*#__PURE__*/React.createElement(PersonRow, {
    label: "Final",
    user: users[ticket.approvals.final.user],
    state: ticket.approvals.final.state
  }))), /*#__PURE__*/React.createElement("div", {
    className: "surface surface-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Demo controls"), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      marginBottom: 10
    }
  }, "(Prototype only \u2014 not in real product)"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: showStaleDemo ? 'danger-secondary' : 'secondary',
    icon: showStaleDemo ? 'x' : 'clock',
    onClick: () => setShowStaleDemo(!showStaleDemo)
  }, showStaleDemo ? 'Hide stale banner' : 'Simulate stale approvals')))), /*#__PURE__*/React.createElement(ApprovalModal, {
    kind: approvalModal,
    ticket: ticket,
    user: me,
    stage: canApproveStage,
    onClose: () => setApprovalModal(null),
    onConfirm: (action, comment) => {
      mutateTicket(ticket.id, action, comment, me);
      setApprovalModal(null);
      showToast(`${action === 'approve' ? 'Approval granted' : action === 'reject' ? 'Ticket rejected' : 'Changes requested'} on ${ticket.id}`);
    }
  }));
}
function ApprovalStage({
  stage,
  step,
  users
}) {
  const user = users[step.user];
  const cls = step.state === 'approved' ? 'done' : step.state === 'pending' ? 'now' : step.state === 'rejected' ? 'wait' : 'wait';
  return /*#__PURE__*/React.createElement("div", {
    className: `appr ${cls}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: stage === 'Final' ? 'shield-check' : stage === 'Business' ? 'briefcase' : 'wrench',
    size: 11
  }), stage, " Approval"), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement(Avatar, {
    user: user,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, user.name)), step.state === 'approved' && /*#__PURE__*/React.createElement("div", {
    className: "stat",
    style: {
      color: 'var(--brand-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10
  }), " Approved \xB7 ", step.at), step.state === 'pending' && /*#__PURE__*/React.createElement("div", {
    className: "stat",
    style: {
      color: 'var(--info-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 10
  }), " Awaiting"), step.state === 'queued' && /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 10
  }), " Locked until previous stage approved"), step.comment && /*#__PURE__*/React.createElement("div", {
    className: "tl-comment",
    style: {
      marginTop: 0
    }
  }, "\"", step.comment, "\""));
}
function PersonRow({
  label,
  user,
  state
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row items-center gap-2 between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row items-center gap-2"
  }, /*#__PURE__*/React.createElement(Avatar, {
    user: user,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-800)',
      fontWeight: 500
    }
  }, user.name), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, label))), state === 'approved' && /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 14,
    color: "var(--brand-500)"
  }), state === 'pending' && /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 14,
    color: "var(--info-500)"
  }));
}
function SodBlockedCard({
  ticket,
  me
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sod-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-circle"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "You can't approve this \u2014 you opened it"), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, "PCI DSS segregation of duties means the author of an RM Ticket can't approve it or deploy it. ", /*#__PURE__*/React.createElement("strong", null, "This is the system working as designed."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "caption",
    style: {
      color: 'var(--ink-500)'
    }
  }, "Need a faster review? Use ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "ping reviewers"), " to notify ", ticket.approvals.tech.user && window.RMP_DATA.users[ticket.approvals.tech.user].name, " and others on Slack."))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "bell",
    size: "sm"
  }, "Ping reviewers"));
}

/* ------------------------------------------------------------------
   APPROVAL MODAL — the moment of truth
   ------------------------------------------------------------------ */
function ApprovalModal({
  kind,
  ticket,
  user,
  stage,
  onClose,
  onConfirm
}) {
  const [comment, setComment] = useState('');
  const [mfaConfirmed, setMfaConfirmed] = useState(false);
  useEffect(() => {
    if (kind) {
      setComment('');
      setMfaConfirmed(false);
    }
  }, [kind]);
  if (!kind) return null;
  const isApprove = kind === 'approve';
  const isReject = kind === 'reject';
  const stageLabel = stage === 'tech' ? 'Technical' : stage === 'business' ? 'Business' : 'Final';
  return /*#__PURE__*/React.createElement(Modal, {
    open: !!kind,
    onClose: onClose,
    size: "lg"
  }, /*#__PURE__*/React.createElement(ModalHead, {
    title: isApprove ? `Grant ${stageLabel} Approval` : isReject ? 'Reject release' : 'Request changes',
    sub: `${ticket.id} · as ${user.role} · ${user.name}`,
    onClose: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-25)',
      border: '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-md)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "You are ", isApprove ? 'approving' : isReject ? 'rejecting' : 'requesting changes on'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-800)',
      fontWeight: 500,
      marginBottom: 8,
      lineHeight: 1.4
    }
  }, ticket.emergency && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: '1px 5px',
      borderRadius: 2,
      background: 'var(--emergency-100)',
      color: 'var(--emergency-700)',
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginRight: 6,
      verticalAlign: 1
    }
  }, "EMERGENCY"), ticket.title), /*#__PURE__*/React.createElement("div", {
    className: "row gap-4 wrap mono",
    style: {
      fontSize: 11,
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Service: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-800)'
    }
  }, ticket.service)), /*#__PURE__*/React.createElement("span", null, "MR: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--brand-700)'
    }
  }, "!", ticket.mr?.num), " (", ticket.mr?.additions ? `+${ticket.mr.additions}` : '', " ", ticket.mr?.deletions ? `−${ticket.mr.deletions}` : '', ")"), /*#__PURE__*/React.createElement("span", null, "Strategy: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-800)'
    }
  }, ticket.deployType)))), isApprove && /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    icon: "shield-check",
    title: `This is the ${stageLabel.toLowerCase()} of three required approvals`
  }, "Your approval will be cryptographically signed and logged. You can revoke it only before the next approval stage begins."), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Comment ", isApprove ? /*#__PURE__*/React.createElement("span", {
    className: "hint-inline"
  }, "\u2014 optional") : /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: "3",
    placeholder: isApprove ? 'Optional context for the audit trail…' : isReject ? 'Why is this not safe to deploy? (required)' : 'What needs to change before this can be re-submitted? (required)',
    value: comment,
    onChange: e => setComment(e.target.value)
  })), isApprove && /*#__PURE__*/React.createElement("label", {
    className: "row items-center gap-2",
    style: {
      fontSize: 13,
      color: 'var(--ink-700)',
      padding: '8px 10px',
      background: 'var(--brand-50)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--brand-100)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: mfaConfirmed,
    onChange: e => setMfaConfirmed(e.target.checked),
    style: {
      accentColor: 'var(--brand-500)',
      width: 14,
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 14,
    color: "var(--brand-600)"
  }), "I confirm with MFA (push notification sent to my registered device)")), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), isApprove && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check",
    disabled: !mfaConfirmed,
    onClick: () => onConfirm('approve', comment)
  }, "Confirm approval"), isReject && /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "x",
    disabled: !comment.trim(),
    onClick: () => onConfirm('reject', comment)
  }, "Reject release"), kind === 'changes' && /*#__PURE__*/React.createElement(Button, {
    variant: "danger-secondary",
    icon: "rotate-ccw",
    disabled: !comment.trim(),
    onClick: () => onConfirm('changes', comment)
  }, "Send back to developer")));
}
Object.assign(window, {
  TicketDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/TicketDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/TicketList.jsx
try { (() => {
/* All RM Tickets — filterable list */

function TicketList({
  navigate
}) {
  const {
    tickets,
    users,
    statusMeta,
    services
  } = window.RMP_DATA;
  const [filter, setFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [authorFilter, setAuthorFilter] = useState('all');
  const [search, setSearch] = useState('');
  const savedViews = [{
    id: 'all',
    label: 'All open'
  }, {
    id: 'awaiting',
    label: 'Awaiting approval'
  }, {
    id: 'mine',
    label: 'My tickets'
  }, {
    id: 'emergency',
    label: 'Emergency only'
  }, {
    id: 'deployed',
    label: 'Recently deployed'
  }];
  const filtered = useMemo(() => {
    return tickets.filter(t => {
      if (search) {
        const s = search.toLowerCase();
        if (!t.id.toLowerCase().includes(s) && !t.title.toLowerCase().includes(s) && !t.service.includes(s)) return false;
      }
      if (filter === 'awaiting' && !t.status.startsWith('PENDING_')) return false;
      if (filter === 'emergency' && !t.emergency) return false;
      if (filter === 'deployed' && t.status !== 'DEPLOYED') return false;
      if (serviceFilter !== 'all' && t.service !== serviceFilter) return false;
      if (authorFilter !== 'all' && t.author !== authorFilter) return false;
      return true;
    });
  }, [filter, serviceFilter, authorFilter, search]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "All RM Tickets"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, filtered.length, " of ", tickets.length, " tickets \xB7 ordered by most recent activity")), /*#__PURE__*/React.createElement("div", {
    className: "page-header-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: () => navigate('#/new')
  }, "New RM Ticket"))), /*#__PURE__*/React.createElement("div", {
    className: "surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filterbar",
    style: {
      borderBottom: '1px solid var(--ink-100)'
    }
  }, savedViews.map(v => /*#__PURE__*/React.createElement("span", {
    key: v.id,
    className: `fpill ${filter === v.id ? 'active' : ''}`,
    onClick: () => setFilter(v.id)
  }, v.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fpill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark-plus",
    size: 12
  }), "Save current view")), /*#__PURE__*/React.createElement("div", {
    className: "filterbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 1 280px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 13,
    style: {
      position: 'absolute',
      left: 10,
      top: 10,
      color: 'var(--ink-400)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Search ID, title, service\u2026",
    value: search,
    onChange: e => setSearch(e.target.value),
    style: {
      paddingLeft: 30,
      height: 32
    }
  })), /*#__PURE__*/React.createElement("select", {
    className: "select",
    style: {
      width: 180,
      height: 32
    },
    value: serviceFilter,
    onChange: e => setServiceFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "All services"), services.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s))), /*#__PURE__*/React.createElement("select", {
    className: "select",
    style: {
      width: 180,
      height: 32
    },
    value: authorFilter,
    onChange: e => setAuthorFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "All authors"), Object.values(users).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, u.name))), /*#__PURE__*/React.createElement("span", {
    className: "fpill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 12
  }), "Last 30 days"), (filter !== 'all' || serviceFilter !== 'all' || authorFilter !== 'all' || search) && /*#__PURE__*/React.createElement("span", {
    className: "fpill",
    onClick: () => {
      setFilter('all');
      setServiceFilter('all');
      setAuthorFilter('all');
      setSearch('');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 12
  }), "Clear")), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "ID"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 150
    }
  }, "Service"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 200
    }
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 100
    }
  }, "Author"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 100
    }
  }, "Updated"))), /*#__PURE__*/React.createElement("tbody", null, filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "6",
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--ink-500)'
    }
  }, "No tickets match your filters.")), filtered.map(t => {
    const author = users[t.author];
    return /*#__PURE__*/React.createElement("tr", {
      key: t.id,
      onClick: () => navigate(`#/ticket/${t.id}`)
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "id"
    }, t.id)), /*#__PURE__*/React.createElement("td", {
      className: "title-cell"
    }, t.emergency && /*#__PURE__*/React.createElement("span", {
      className: "em-tag"
    }, "EMERGENCY"), t.title), /*#__PURE__*/React.createElement("td", {
      className: "mono",
      style: {
        fontSize: 12,
        color: 'var(--ink-600)'
      }
    }, t.service), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
      status: t.status
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "row items-center gap-2"
    }, /*#__PURE__*/React.createElement(Avatar, {
      user: author,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, author.name.split(' ')[0]))), /*#__PURE__*/React.createElement("td", {
      className: "mono",
      style: {
        fontSize: 11,
        color: 'var(--ink-500)'
      }
    }, t.createdAt));
  })))));
}
Object.assign(window, {
  TicketList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/TicketList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rmp/data.js
try { (() => {
/* Sample data for the RMP UI Kit prototype. All fake. */

window.RMP_DATA = function () {
  const users = {
    jess: {
      id: 'jess',
      name: 'Jess Donovan',
      initials: 'JD',
      role: 'Developer',
      roleClass: 'role-dev'
    },
    marcus: {
      id: 'marcus',
      name: 'Marcus Chen',
      initials: 'MC',
      role: 'Team Lead',
      roleClass: 'role-lead'
    },
    priya: {
      id: 'priya',
      name: 'Priya Anand',
      initials: 'PA',
      role: 'Product Manager',
      roleClass: 'role-pm'
    },
    anya: {
      id: 'anya',
      name: 'Anya Volkov',
      initials: 'AV',
      role: 'CTO',
      roleClass: 'role-cto'
    },
    diego: {
      id: 'diego',
      name: 'Diego Martín',
      initials: 'DM',
      role: 'Release Engineer',
      roleClass: 'role-devops'
    },
    pablo: {
      id: 'pablo',
      name: 'Pablo Romero',
      initials: 'PR',
      role: 'Developer',
      roleClass: 'role-dev'
    },
    sara: {
      id: 'sara',
      name: 'Sara Kim',
      initials: 'SK',
      role: 'Team Lead',
      roleClass: 'role-lead'
    },
    farah: {
      id: 'farah',
      name: 'Farah Idris',
      initials: 'FI',
      role: 'Auditor',
      roleClass: 'role-aud'
    }
  };
  const services = ['payments-api', 'checkout-web', 'fraud-engine', 'wallet-service', 'ledger-core', 'notifications', 'auth-gateway'];
  const tickets = [{
    id: 'RM-1042',
    title: 'Promote payments-api v2.14.3 — retry budget increase + Stripe SDK upgrade',
    author: 'jess',
    service: 'payments-api',
    env: 'production',
    ip: '10.42.8.3',
    port: '8080',
    namespace: 'payments-prod',
    deployType: 'rolling',
    deployWindow: 'Today 18:00–19:00 UTC',
    mr: {
      num: '247',
      repo: 'payments-api',
      title: 'feat: increase retry budget for upstream failures',
      commits: 4,
      additions: 187,
      deletions: 32,
      branch: 'feat/retry-budget'
    },
    jira: {
      id: 'PROJ-1187',
      title: 'Stripe outage 2025-05-14: post-mortem action item #3'
    },
    impact: 'Affects all card payment retry behavior for failed upstream calls. Upgrades stripe-node from 14.x → 17.x; reviewed for breaking changes (none affect our usage). No customer-facing UI changes. Estimated blast radius: 100% of /v1/charge traffic.',
    rollback: 'Re-deploy v2.14.2 via Bitbucket pipeline rmp-rollback step. Stripe SDK downgrade is forward-compatible. Cache will warm in ~90s.',
    validation: [{
      label: 'Synthetic charge succeeds end-to-end',
      done: false
    }, {
      label: 'Retry rate returns to baseline (< 0.4%)',
      done: false
    }, {
      label: 'p99 latency < 220ms on /v1/charge',
      done: false
    }, {
      label: 'No new error signatures in Sentry',
      done: false
    }],
    emergency: false,
    status: 'PENDING_FINAL_APPROVAL',
    createdAt: 'today 14:02',
    approvals: {
      tech: {
        state: 'approved',
        user: 'marcus',
        at: 'today 14:38',
        comment: 'MR is clean, retry logic looks correct. SDK upgrade reviewed for breaking changes.'
      },
      business: {
        state: 'approved',
        user: 'priya',
        at: 'today 15:11',
        comment: ''
      },
      final: {
        state: 'pending',
        user: 'anya'
      }
    },
    timeline: [{
      type: 'system',
      text: 'Ticket created from MR template',
      who: 'jess',
      at: 'today 14:02'
    }, {
      type: 'system',
      text: 'Linked PROJ-1187 (Jira)',
      who: 'jess',
      at: 'today 14:04'
    }, {
      type: 'system',
      text: 'Submitted for review',
      who: 'jess',
      at: 'today 14:08'
    }, {
      type: 'approved',
      text: 'granted Technical Approval',
      who: 'marcus',
      at: 'today 14:38',
      comment: 'MR is clean, retry logic looks correct. SDK upgrade reviewed for breaking changes.'
    }, {
      type: 'approved',
      text: 'granted Business Approval',
      who: 'priya',
      at: 'today 15:11'
    }, {
      type: 'system',
      text: 'Final approval requested from Anya Volkov (reminder sent at 15:42)',
      who: 'system',
      at: 'today 15:32'
    }]
  }, {
    id: 'RM-1043',
    title: 'Hotfix: revert null-pointer in checkout-web cart serialization',
    author: 'pablo',
    service: 'checkout-web',
    env: 'production',
    ip: '10.42.4.1',
    port: '443',
    namespace: 'checkout-prod',
    deployType: 'rolling',
    deployWindow: 'ASAP',
    mr: {
      num: '892',
      repo: 'checkout-web',
      title: 'hotfix: guard against null variant in serializeCart',
      commits: 1,
      additions: 8,
      deletions: 2,
      branch: 'hotfix/cart-npe'
    },
    jira: {
      id: 'INC-441',
      title: 'P1: Checkout 500s spiking for guest users'
    },
    impact: 'Restoring checkout for guest users. NPE introduced in 2.41.1 affects ~12% of carts. Fix is a one-line null guard. Customer impact growing — current p1 incident, ~$8k/min in lost orders.',
    rollback: 'Revert to 2.41.0 — restores the regression but stops the bleeding. NPE only triggers on saved-variant carts.',
    validation: [{
      label: 'p1 incident closed',
      done: false
    }, {
      label: 'Cart 500 rate < 0.05%',
      done: false
    }],
    emergency: true,
    status: 'PENDING_TECH_REVIEW',
    createdAt: '12m ago',
    approvals: {
      tech: {
        state: 'pending',
        user: 'sara'
      },
      business: {
        state: 'queued',
        user: 'priya'
      },
      final: {
        state: 'queued',
        user: 'anya'
      }
    },
    timeline: [{
      type: 'system',
      text: 'Ticket created with Emergency flag',
      who: 'pablo',
      at: '12m ago'
    }, {
      type: 'system',
      text: 'Linked INC-441 (Jira)',
      who: 'pablo',
      at: '11m ago'
    }, {
      type: 'system',
      text: 'Submitted — paged Marcus, Sara, Anya',
      who: 'pablo',
      at: '10m ago'
    }]
  }, {
    id: 'RM-1041',
    title: 'wallet-service v3.8 — idempotency key TTL extension',
    author: 'jess',
    service: 'wallet-service',
    status: 'APPROVED',
    createdAt: 'today 11:20',
    emergency: false
  }, {
    id: 'RM-1040',
    title: 'fraud-engine ML model bump to v4.2 (precision +1.3%)',
    author: 'pablo',
    service: 'fraud-engine',
    status: 'DEPLOYING',
    createdAt: 'today 09:48',
    emergency: false
  }, {
    id: 'RM-1039',
    title: 'auth-gateway — rotate JWT signing key (quarterly)',
    author: 'marcus',
    service: 'auth-gateway',
    status: 'DEPLOYED',
    createdAt: 'yesterday',
    emergency: false
  }, {
    id: 'RM-1038',
    title: 'ledger-core — fix rounding on multi-currency settlement',
    author: 'jess',
    service: 'ledger-core',
    status: 'PENDING_BUSINESS_REVIEW',
    createdAt: 'yesterday',
    emergency: false
  }, {
    id: 'RM-1037',
    title: 'notifications — switch SMS provider primary to Twilio',
    author: 'sara',
    service: 'notifications',
    status: 'CHANGES_REQUESTED',
    createdAt: '2d ago',
    emergency: false
  }, {
    id: 'RM-1036',
    title: 'payments-api v2.14.2 — increase pool size for refund endpoint',
    author: 'jess',
    service: 'payments-api',
    status: 'CLOSED',
    createdAt: '2d ago',
    emergency: false
  }, {
    id: 'RM-1035',
    title: 'checkout-web — broken Apple Pay button on Safari 17.4',
    author: 'pablo',
    service: 'checkout-web',
    status: 'REJECTED',
    createdAt: '3d ago',
    emergency: false
  }, {
    id: 'RM-1034',
    title: 'wallet-service — config: enable feature.transferLimits',
    author: 'marcus',
    service: 'wallet-service',
    status: 'ROLLED_BACK',
    createdAt: '3d ago',
    emergency: false
  }, {
    id: 'RM-1033',
    title: 'fraud-engine — DB index on transactions(merchant_id, ts)',
    author: 'sara',
    service: 'fraud-engine',
    status: 'FAILED',
    createdAt: '4d ago',
    emergency: false
  }, {
    id: 'RM-1032',
    title: 'ledger-core — emergency revert of v3.2.1 (race condition)',
    author: 'pablo',
    service: 'ledger-core',
    status: 'DEPLOYED',
    createdAt: '5d ago',
    emergency: true
  }, {
    id: 'RM-1031',
    title: 'notifications — bump retry from 3 → 5 for SMS',
    author: 'jess',
    service: 'notifications',
    status: 'CLOSED',
    createdAt: '5d ago',
    emergency: false
  }, {
    id: 'RM-1030',
    title: 'auth-gateway — add CORS allow-list for partners.global.uz',
    author: 'marcus',
    service: 'auth-gateway',
    status: 'DRAFT',
    createdAt: '5d ago',
    emergency: false
  }];
  const statusMeta = {
    DRAFT: {
      label: 'Draft',
      fg: 'var(--status-draft-fg)',
      bg: 'var(--status-draft-bg)'
    },
    PENDING_TECH_REVIEW: {
      label: 'Pending Tech Review',
      fg: 'var(--status-pending-tech-fg)',
      bg: 'var(--status-pending-tech-bg)'
    },
    PENDING_BUSINESS_REVIEW: {
      label: 'Pending Business Review',
      fg: 'var(--status-pending-business-fg)',
      bg: 'var(--status-pending-business-bg)'
    },
    PENDING_FINAL_APPROVAL: {
      label: 'Pending Final Approval',
      fg: 'var(--status-pending-final-fg)',
      bg: 'var(--status-pending-final-bg)'
    },
    CHANGES_REQUESTED: {
      label: 'Changes Requested',
      fg: 'var(--status-changes-fg)',
      bg: 'var(--status-changes-bg)'
    },
    APPROVED: {
      label: 'Approved',
      fg: 'var(--status-approved-fg)',
      bg: 'var(--status-approved-bg)'
    },
    DEPLOYING: {
      label: 'Deploying',
      fg: 'var(--status-deploying-fg)',
      bg: 'var(--status-deploying-bg)',
      pulse: true
    },
    DEPLOYED: {
      label: 'Deployed',
      fg: 'var(--status-deployed-fg)',
      bg: 'var(--status-deployed-bg)'
    },
    ROLLED_BACK: {
      label: 'Rolled Back',
      fg: 'var(--status-rolled-back-fg)',
      bg: 'var(--status-rolled-back-bg)'
    },
    CLOSED: {
      label: 'Closed',
      fg: 'var(--status-closed-fg)',
      bg: 'var(--status-closed-bg)'
    },
    REJECTED: {
      label: 'Rejected',
      fg: 'var(--status-rejected-fg)',
      bg: 'var(--status-rejected-bg)'
    },
    CANCELLED: {
      label: 'Cancelled',
      fg: 'var(--status-cancelled-fg)',
      bg: 'var(--status-cancelled-bg)'
    },
    FAILED: {
      label: 'Failed',
      fg: 'var(--status-failed-fg)',
      bg: 'var(--status-failed-bg)'
    }
  };

  // Audit log entries
  const audit = [{
    ts: '2026-05-23 16:14:02',
    actor: 'priya',
    action: 'APPROVAL_BUSINESS_GRANTED',
    target: 'RM-1042',
    ip: '10.0.4.221'
  }, {
    ts: '2026-05-23 15:38:11',
    actor: 'marcus',
    action: 'APPROVAL_TECH_GRANTED',
    target: 'RM-1042',
    ip: '10.0.4.118'
  }, {
    ts: '2026-05-23 15:08:44',
    actor: 'jess',
    action: 'TICKET_SUBMITTED',
    target: 'RM-1042',
    ip: '10.0.4.94'
  }, {
    ts: '2026-05-23 14:02:01',
    actor: 'jess',
    action: 'TICKET_CREATED',
    target: 'RM-1042',
    ip: '10.0.4.94'
  }, {
    ts: '2026-05-23 12:18:09',
    actor: 'diego',
    action: 'DEPLOYMENT_TRIGGERED',
    target: 'RM-1040',
    ip: '10.0.4.18'
  }, {
    ts: '2026-05-23 12:12:37',
    actor: 'system',
    action: 'STALE_APPROVALS_DETECTED',
    target: 'RM-1037',
    ip: '—'
  }, {
    ts: '2026-05-23 11:48:30',
    actor: 'pablo',
    action: 'APPROVAL_SELF_BLOCKED',
    target: 'RM-1043',
    ip: '10.0.4.211'
  }, {
    ts: '2026-05-23 09:48:18',
    actor: 'pablo',
    action: 'TICKET_CREATED',
    target: 'RM-1040',
    ip: '10.0.4.211'
  }, {
    ts: '2026-05-22 18:02:11',
    actor: 'marcus',
    action: 'DEPLOYMENT_COMPLETED',
    target: 'RM-1039',
    ip: '10.0.4.118'
  }, {
    ts: '2026-05-22 17:55:08',
    actor: 'anya',
    action: 'APPROVAL_FINAL_GRANTED',
    target: 'RM-1039',
    ip: '10.0.4.4'
  }];
  const roleAssignments = [{
    user: 'jess',
    roles: ['Developer']
  }, {
    user: 'marcus',
    roles: ['Developer', 'Team Lead']
  }, {
    user: 'sara',
    roles: ['Developer', 'Team Lead']
  }, {
    user: 'priya',
    roles: ['Product Manager']
  }, {
    user: 'anya',
    roles: ['CTO']
  }, {
    user: 'diego',
    roles: ['Release Engineer']
  }, {
    user: 'pablo',
    roles: ['Developer']
  }, {
    user: 'farah',
    roles: ['Auditor']
  }];
  return {
    users,
    services,
    tickets,
    statusMeta,
    audit,
    roleAssignments
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/data.js", error: String((e && e.message) || e) }); }

// ui_kits/rmp/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared UI primitives + Lucide icon helper.
   All components attach to window for cross-file scope. */

const {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} = React;

/* ------------------------------------------------------------------
   ICON — lightweight Lucide wrapper (string name → <i data-lucide>)
   We rely on lucide.createIcons() to swap them after each render.
   ------------------------------------------------------------------ */
function Icon({
  name,
  size = 16,
  color,
  className = '',
  strokeWidth = 1.75,
  style = {}
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke-width', strokeWidth);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: `rmp-icon ${className}`,
    style: {
      display: 'inline-flex',
      color,
      width: size,
      height: size,
      ...style
    }
  });
}

/* ------------------------------------------------------------------
   BUTTON
   ------------------------------------------------------------------ */
function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  children,
  ...rest
}) {
  const cls = `btn btn-${variant} btn-${size}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'sm' ? 12 : 14
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: size === 'sm' ? 12 : 14
  }));
}

/* ------------------------------------------------------------------
   STATUS BADGE — driven by data.statusMeta
   ------------------------------------------------------------------ */
function StatusBadge({
  status,
  size,
  emergency
}) {
  const meta = window.RMP_DATA.statusMeta[status] || {
    label: status,
    fg: 'var(--ink-700)',
    bg: 'var(--ink-100)'
  };
  const cls = `chip ${size === 'lg' ? 'lg' : ''} ${meta.pulse ? 'chip-pulse' : ''}`;
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: {
      background: meta.bg,
      color: meta.fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), emergency && /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 2,
      opacity: 0.7
    }
  }, "\u26A1"), meta.label);
}

/* ------------------------------------------------------------------
   AVATAR
   ------------------------------------------------------------------ */
function Avatar({
  user,
  size = ''
}) {
  if (!user) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: `avatar ${size ? size : ''} ${user.roleClass || ''}`,
    title: `${user.name} · ${user.role}`
  }, user.initials);
}

/* ------------------------------------------------------------------
   MODAL
   ------------------------------------------------------------------ */
function Modal({
  open,
  onClose,
  children,
  size
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: `modal ${size === 'lg' ? 'modal-lg' : ''}`,
    onClick: e => e.stopPropagation()
  }, children));
}
function ModalHead({
  title,
  sub,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, sub)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })));
}

/* ------------------------------------------------------------------
   BANNER
   ------------------------------------------------------------------ */
function Banner({
  tone = 'info',
  icon,
  title,
  children,
  action
}) {
  const iconByTone = {
    info: 'info',
    success: 'check-circle-2',
    warning: 'alert-triangle',
    danger: 'alert-octagon',
    emergency: 'zap'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `banner banner-${tone}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon || iconByTone[tone],
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, children)), action);
}

/* ------------------------------------------------------------------
   TOAST stack — simple imperative
   ------------------------------------------------------------------ */
const _toastListeners = [];
function showToast(msg) {
  _toastListeners.forEach(fn => fn(msg));
}
function ToastStack() {
  const [toasts, setToasts] = useState([]);
  useEffect(() => {
    const fn = msg => {
      const id = Math.random();
      setToasts(ts => [...ts, {
        id,
        msg
      }]);
      setTimeout(() => setToasts(ts => ts.filter(t => t.id !== id)), 3200);
    };
    _toastListeners.push(fn);
    return () => {
      const i = _toastListeners.indexOf(fn);
      if (i >= 0) _toastListeners.splice(i, 1);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "toast-stack"
  }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "toast"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 16
  }), t.msg)));
}

/* ------------------------------------------------------------------
   TIMELINE
   ------------------------------------------------------------------ */
function Timeline({
  events
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, events.map((ev, i) => {
    const user = window.RMP_DATA.users[ev.who] || {
      name: ev.who,
      initials: 'SY'
    };
    const nodeIcon = ev.type === 'approved' ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 10
    }) : ev.type === 'rejected' ? /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 10
    }) : ev.type === 'changes' ? /*#__PURE__*/React.createElement(Icon, {
      name: "rotate-ccw",
      size: 10
    }) : null;
    return /*#__PURE__*/React.createElement("div", {
      className: "tl-event",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: `tl-node ${ev.type}`
    }, nodeIcon), /*#__PURE__*/React.createElement("div", {
      className: "tl-line1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "who"
    }, ev.who === 'system' ? 'System' : user.name), ' ', /*#__PURE__*/React.createElement("span", {
      className: "what"
    }, ev.text)), /*#__PURE__*/React.createElement("div", {
      className: "tl-line2"
    }, ev.at), ev.comment && /*#__PURE__*/React.createElement("div", {
      className: "tl-comment"
    }, "\"", ev.comment, "\""));
  }));
}

/* ------------------------------------------------------------------
   USER MENU — used by topbar (illustrative, doesn't really open)
   ------------------------------------------------------------------ */

Object.assign(window, {
  Icon,
  Button,
  StatusBadge,
  Avatar,
  Modal,
  ModalHead,
  Banner,
  ToastStack,
  showToast,
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rmp/ui.jsx", error: String((e && e.message) || e) }); }

})();
