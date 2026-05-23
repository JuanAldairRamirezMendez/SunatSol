export const dashboardProfile = {
  workerName: "María López",
  ruc: "10734521890",
  regime: "Cuarta categoría",
  status: "Activo",
  address: "Av. Arequipa 1234, Lima",
  lastLogin: "Hoy 08:42",
};

export const dashboardReceipts = [
  {
    number: "E001-245",
    clientName: "Minera Andina S.A.C.",
    amount: 3200,
    retention: 256,
    netAmount: 2944,
    paymentMethod: "Transferencia bancaria",
    status: "emitido",
    date: "23 may 2026",
  },
  {
    number: "E001-244",
    clientName: "Servicios Globales del Sur S.A.C.",
    amount: 1800,
    retention: 144,
    netAmount: 1656,
    paymentMethod: "Depósito bancario",
    status: "emitido",
    date: "19 may 2026",
  },
  {
    number: "E001-243",
    clientName: "Grupo Logística Perú S.A.C.",
    amount: 950,
    retention: 0,
    netAmount: 950,
    paymentMethod: "Efectivo",
    status: "pendiente",
    date: "15 may 2026",
  },
];

export const dashboardNotifications = [
  {
    title: "Declaración mensual próxima a vencer",
    message: "Tu periodo de mayo 2026 aún tiene una declaración pendiente.",
    time: "Hace 12 min",
    unread: true,
  },
  {
    title: "Nuevo comprobante emitido",
    message: "El RHE E001-245 fue registrado correctamente en SUNAT.",
    time: "Hace 2 h",
    unread: true,
  },
  {
    title: "Beneficio disponible",
    message: "Revisa la deducción automática de 7 UIT en tu panel.",
    time: "Ayer",
    unread: false,
  },
];

export const dashboardBenefits = [
  {
    title: "Deducción de 7 UIT",
    detail: "Aplica a rentas de cuarta categoría cuando corresponde.",
    iconLabel: "7 UIT",
  },
  {
    title: "Retención automática",
    detail: "El 8% se calcula si el cliente corresponde y supera el mínimo.",
    iconLabel: "8%",
  },
  {
    title: "Historial centralizado",
    detail: "Consulta recibos, reportes y notificaciones desde un solo lugar.",
    iconLabel: "24/7",
  },
];

export const declarationChecklist = [
  "Verifica tus recibos emitidos del periodo.",
  "Confirma si corresponde retención del 8%.",
  "Revisa fechas límite antes de presentar la declaración.",
];

export const reportMonthlyTrend = [
  { label: "Ene", value: 1800 },
  { label: "Feb", value: 2400 },
  { label: "Mar", value: 2100 },
  { label: "Abr", value: 2800 },
  { label: "May", value: 3600 },
];

export const rucProfile = {
  legalName: "María López",
  businessName: "Servicios Profesionales López",
  regime: "Persona natural con negocio",
  condition: "Habido",
  startDate: "12/08/2022",
  activity: "Servicios de consultoría",
  representative: "Titular",
};