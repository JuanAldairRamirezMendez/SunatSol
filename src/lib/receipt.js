export function formatCurrency(amount) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function calculateRetention(grossAmount, enabled) {
  if (!enabled) {
    return 0;
  }

  return Number((grossAmount * 0.08).toFixed(2));
}

export function buildReceiptNumber() {
  const sequence = Math.floor(10 + Math.random() * 89);
  return `E001-${sequence}`;
}