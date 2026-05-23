import { useEffect, useMemo, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { StepProgressBar } from "@/components/StepProgressBar";
import { lookupClientName } from "@/data/clients";

const styles = StyleSheet.create({
  progressContainer: {
    marginVertical: 8,
  },
  inputContainer: {
    marginTop: 24,
    gap: 16,
  },
  infoCard: {
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginVertical: 8,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.18,
    textTransform: "uppercase",
    color: "#94A3B8",
  },
  infoText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },
});

export function Step1ClientDataScreen({ navigation, route }) {
  const { workerName } = route.params;
  const [clientRuc, setClientRuc] = useState("");
  const [clientName, setClientName] = useState("");
  const [grossAmount, setGrossAmount] = useState("");

  useEffect(() => {
    if (clientRuc.length !== 11) {
      setClientName("");
      return;
    }

    const timeout = setTimeout(() => {
      setClientName(lookupClientName(clientRuc) || "Empresa no encontrada");
    }, 250);

    return () => clearTimeout(timeout);
  }, [clientRuc]);

  const amountNumber = useMemo(() => Number(grossAmount || 0), [grossAmount]);

  const canContinue = clientRuc.length === 11 && amountNumber > 0;

  return (
    <ScreenShell title="Datos del cliente" subtitle={`Paso 1 de 2. Prepárate para emitir el RHE, ${workerName}.`}>
      <View style={styles.progressContainer}>
        <StepProgressBar progress={50} label="Emisión" />
      </View>

      <View style={styles.inputContainer}>
        <FloatingLabelInput
          label="RUC del cliente"
          value={clientRuc}
          onChangeText={(value) => setClientRuc(value.replace(/\D/g, "").slice(0, 11))}
          keyboardType="number-pad"
          maxLength={11}
        />
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Nombre de empresa</Text>
          <Text style={styles.infoText}>{clientName || "Ingresa un RUC válido para autofetch"}</Text>
        </View>
        <FloatingLabelInput label="Monto bruto" value={grossAmount} onChangeText={setGrossAmount} prefix="S/" keyboardType="decimal-pad" />
        <PrimaryButton title="Continuar" onPress={() => navigation.navigate("Step2_TaxDetails", { workerName, clientRuc, clientName, grossAmount: amountNumber })} disabled={!canContinue} />
      </View>
    </ScreenShell>
  );
}
      </View>
    </ScreenShell>
  );
}