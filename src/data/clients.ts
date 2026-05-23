export const clientDirectory: Record<string, string> = {
  "20100070970": "Minera Andina S.A.C.",
  "20567890123": "Servicios Globales del Sur S.A.C.",
  "20601234567": "Grupo Logística Perú S.A.C.",
};

export function lookupClientName(ruc: string) {
  return clientDirectory[ruc] ?? "";
}