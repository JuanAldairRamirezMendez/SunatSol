import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { StepProgressBar } from "@/components/StepProgressBar";
import { RootStackParamList } from "@/navigation/types";
import { lookupClientName } from "@/data/clients";

type Props = NativeStackScreenProps<RootStackParamList, "Step1_ClientData">;

export function Step1ClientDataScreen({ navigation, route }: Props) {
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
      <StepProgressBar progress={50} label="Emisión" />

      <View className="mt-6 gap-4">
        <FloatingLabelInput
          label="RUC del cliente"
          value={clientRuc}
          onChangeText={(value) => setClientRuc(value.replace(/\D/g, "").slice(0, 11))}
          keyboardType="number-pad"
          maxLength={11}
        />
        <View className="rounded-2xl bg-white px-4 py-4">
          <Text className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">Nombre de empresa</Text>
          <Text className="mt-2 text-[16px] font-semibold text-slate-900">{clientName || "Ingresa un RUC válido para autofetch"}</Text>
        </View>
        <FloatingLabelInput label="Monto bruto" value={grossAmount} onChangeText={setGrossAmount} prefix="S/" keyboardType="decimal-pad" />
        <PrimaryButton title="Continuar" onPress={() => navigation.navigate("Step2_TaxDetails", { workerName, clientRuc, clientName, grossAmount: amountNumber })} disabled={!canContinue} />
      </View>
    </ScreenShell>
  );
}