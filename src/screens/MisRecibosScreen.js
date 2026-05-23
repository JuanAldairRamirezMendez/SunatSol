import { Alert, Pressable, Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { dashboardReceipts } from "@/data/dashboard";
import { formatCurrency } from "@/lib/receipt";

const styles = StyleSheet.create({
  summaryCard: {
    borderRadius: 28,
    backgroundColor: "#0057A8",
    padding: 20,
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.75)",
    textTransform: "uppercase",
    letterSpacing: 0.22,
  },
  summaryCount: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  summaryTotal: {
    marginTop: 8,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.85)",
  },
  receiptsContainer: {
    marginTop: 24,
    gap: 12,
  },
  receiptCard: {
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 50,
    elevation: 5,
  },
  receiptRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  receiptInfo: {
    flex: 1,
    paddingRight: 12,
  },
  receiptNumber: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 0.18,
  },
  receiptClientName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },
  receiptMeta: {
    marginTop: 4,
    fontSize: 13,
    color: "#94A3B8",
  },
  statusBadge: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  statusBadgeEmitido: {
    backgroundColor: "#1D9E751A",
  },
  statusBadgePendiente: {
    backgroundColor: "#EF9F271A",
  },
  statusBadgeOther: {
    backgroundColor: "#F1F5F9",
  },
  statusText: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  statusTextEmitido: {
    color: "#1D9E75",
  },
  statusTextPendiente: {
    color: "#EF9F27",
  },
  statusTextOther: {
    color: "#64748B",
  },
  amountsRow: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  amountColumn: {},
  amountLabel: {
    fontSize: 11,
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 0.18,
  },
  netAmount: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0057A8",
  },
  grossAmount: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },
  amountColumnEnd: {
    alignItems: "flex-end",
  },
  backButton: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#0057A8",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0057A8",
  },
});

export function MisRecibosScreen({ navigation }) {
  const emitidos = dashboardReceipts.filter((receipt) => receipt.status === "emitido");
  const total = emitidos.reduce((sum, receipt) => sum + receipt.netAmount, 0);

  const getStatusBadgeStyle = (status) => {
    if (status === "emitido") return [styles.statusBadge, styles.statusBadgeEmitido];
    if (status === "pendiente") return [styles.statusBadge, styles.statusBadgePendiente];
    return [styles.statusBadge, styles.statusBadgeOther];
  };

  const getStatusTextStyle = (status) => {
    if (status === "emitido") return [styles.statusText, styles.statusTextEmitido];
    if (status === "pendiente") return [styles.statusText, styles.statusTextPendiente];
    return [styles.statusText, styles.statusTextOther];
  };

  return (
    <ScreenShell title="Mis recibos" subtitle="Revisa tus RHE emitidos, su estado y el importe neto recibido.">
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Resumen</Text>
        <Text style={styles.summaryCount}>{emitidos.length} emitidos</Text>
        <Text style={styles.summaryTotal}>Total neto recibido: {formatCurrency(total)}</Text>
      </View>

      <View style={styles.receiptsContainer}>
        {dashboardReceipts.map((receipt) => (
          <Pressable
            key={receipt.number}
            onPress={() => Alert.alert(receipt.number, `${receipt.clientName}\n${receipt.paymentMethod}\nNeto: ${formatCurrency(receipt.netAmount)}`)}
            style={styles.receiptCard}
          >
            <View style={styles.receiptRow}>
              <View style={styles.receiptInfo}>
                <Text style={styles.receiptNumber}>{receipt.number}</Text>
                <Text style={styles.receiptClientName}>{receipt.clientName}</Text>
                <Text style={styles.receiptMeta}>{receipt.date} · {receipt.paymentMethod}</Text>
              </View>
              <View style={getStatusBadgeStyle(receipt.status)}>
                <Text style={getStatusTextStyle(receipt.status)}>{receipt.status}</Text>
              </View>
            </View>

            <View style={styles.amountsRow}>
              <View style={styles.amountColumn}>
                <Text style={styles.amountLabel}>Neto</Text>
                <Text style={styles.netAmount}>{formatCurrency(receipt.netAmount)}</Text>
              </View>
              <View style={[styles.amountColumn, styles.amountColumnEnd]}>
                <Text style={styles.amountLabel}>Bruto</Text>
                <Text style={styles.grossAmount}>{formatCurrency(receipt.amount)}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text style={styles.backButtonText}>Volver al inicio</Text>
      </Pressable>
    </ScreenShell>
  );
}