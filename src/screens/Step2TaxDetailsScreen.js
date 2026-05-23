import { useMemo, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { StepProgressBar } from "@/components/StepProgressBar";
import { TooltipSwitch } from "@/components/TooltipSwitch";

const styles = StyleSheet.create({
  progressContainer: {
    marginVertical: 8,
  },
  inputContainer: {
    marginTop: 24,
    gap: 16,
  },
  paymentCard: {
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginVertical: 8,
  },
  paymentLabel: {
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.18,
    textTransform: "uppercase",
    color: "#94A3B8",
  },
  paymentButtonsRow: {
    marginTop: 12,
    flexDirection: "row",
    gap: 12,
  },
  paymentButtonFlex: {
    flex: 1,
  },
  conditionCard: {
    borderRadius: 16,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 8,
  },
  conditionLabel: {
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.18,
    textTransform: "uppercase",
    color: "#94A3B8",
  },
  conditionText: {
    marginTop: 8,
    fontSize: 15,
    color: "#475569",
  },
});

export function Step2TaxDetailsScreen({ navigation, route }) {
  const { workerName, clientRuc, clientName, grossAmount } = route.params;
  const [paymentMethod, setPaymentMethod] = useState("contado");
  const [retentionEnabled, setRetentionEnabled] = useState(grossAmount > 1500);

  const summaryEnabled = useMemo(() => retentionEnabled && grossAmount > 1500, [grossAmount, retentionEnabled]);

  return (
    <ScreenShell title="Detalles tributarios" subtitle={`Paso 2 de 2. Revisa las condiciones del recibo para ${clientName}.`}>
      <View style={styles.progressContainer}>
        <StepProgressBar progress={100} label="Impuestos" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.paymentCard}>
          <Text style={styles.paymentLabel}>Forma de pago</Text>
          <View style={styles.paymentButtonsRow}>
            {["contado", "credito"].map((method) => {
              const active = paymentMethod === method;
              return (
                <View key={method} style={styles.paymentButtonFlex}>
                  <PrimaryButton
                    title={method === "contado" ? "Contado" : "Crédito"}
                    onPress={() => setPaymentMethod(method)}
                    variant={active ? "primary" : "muted"}
                  />
                </View>
              );
            })}
          </View>
        </View>

        <TooltipSwitch
          label="Aplicar retención 8%"
          value={retentionEnabled}
          onValueChange={setRetentionEnabled}
          tooltip="Aplica si el recibo supera S/1,500 y el cliente es empresa."
        />

        <View style={styles.conditionCard}>
          <Text style={styles.conditionLabel}>Condición detectada</Text>
          <Text style={styles.conditionText}>Monto: S/{grossAmount.toFixed(2)} · RUC: {clientRuc}</Text>
          <Text style={styles.conditionText}>Retención sugerida: {summaryEnabled ? "Activa" : "Inactiva"}</Text>
        </View>

        <PrimaryButton
          title="Ver resumen"
          onPress={() => navigation.navigate("Summary", { workerName, clientRuc, clientName, grossAmount, paymentMethod, retentionEnabled: summaryEnabled })}
        />
      </View>
    </ScreenShell>
  );
}