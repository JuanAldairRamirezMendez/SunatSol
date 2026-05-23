import { useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";

import { OutlineButton } from "@/components/OutlineButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { SummaryCard } from "@/components/SummaryCard";
import { buildReceiptNumber, calculateRetention, formatCurrency } from "@/lib/receipt";

const styles = StyleSheet.create({
  gapContainer: {
    gap: 16,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: "#475569",
  },
  amount: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
  },
  amountAlert: {
    fontSize: 14,
    fontWeight: "600",
    color: "#EF9F27",
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 8,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0057A8",
  },
  meta: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 8,
  },
  buttonsContainer: {
    marginTop: 24,
    gap: 12,
  },
});

export function SummaryScreen({ navigation, route }) {
  const { workerName, clientName, grossAmount, paymentMethod, retentionEnabled } = route.params;
  const retentionAmount = calculateRetention(grossAmount, retentionEnabled);
  const totalAmount = grossAmount - retentionAmount;
  const receiptNumber = useMemo(() => buildReceiptNumber(), []);

  return (
    <ScreenShell title="Resumen de emisión" subtitle={`Revisa los valores finales antes de confirmar, ${workerName}.`}>
      <SummaryCard title="Desglose del recibo">
        <View style={styles.gapContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Bruto</Text>
            <Text style={styles.amount}>{formatCurrency(grossAmount)}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={[styles.label, { color: "#EF9F27" }]}>Retención</Text>
            <Text style={styles.amountAlert}>- {formatCurrency(retentionAmount)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Total</Text>
            <Text style={styles.totalAmount}>{formatCurrency(totalAmount)}</Text>
          </View>
          <Text style={styles.meta}>Forma de pago: {paymentMethod}</Text>
          <Text style={styles.meta}>Cliente: {clientName}</Text>
        </View>
      </SummaryCard>

      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Confirmar emisión" onPress={() => navigation.replace("Success", { workerName, receiptNumber, clientName, totalAmount })} />
        <OutlineButton title="Volver a editar" onPress={() => navigation.goBack()} />
      </View>
    </ScreenShell>
  );
}