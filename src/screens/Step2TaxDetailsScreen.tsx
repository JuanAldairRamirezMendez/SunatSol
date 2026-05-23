import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { StepProgressBar } from "@/components/StepProgressBar";
import { TooltipSwitch } from "@/components/TooltipSwitch";
import { RootStackParamList } from "@/navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Step2_TaxDetails">;

export function Step2TaxDetailsScreen({ navigation, route }: Props) {
  const { workerName, clientRuc, clientName, grossAmount } = route.params;
  const [paymentMethod, setPaymentMethod] = useState<"contado" | "credito">("contado");
  const [retentionEnabled, setRetentionEnabled] = useState(grossAmount > 1500);

  const summaryEnabled = useMemo(() => retentionEnabled && grossAmount > 1500, [grossAmount, retentionEnabled]);

  return (
    <ScreenShell title="Detalles tributarios" subtitle={`Paso 2 de 2. Revisa las condiciones del recibo para ${clientName}.`}>
      <StepProgressBar progress={100} label="Impuestos" />

      <View className="mt-6 gap-4">
        <View className="rounded-2xl bg-white px-4 py-4">
          <Text className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">Forma de pago</Text>
          <View className="mt-3 flex-row gap-3">
            {(["contado", "credito"] as const).map((method) => {
              const active = paymentMethod === method;
              return (
                <PrimaryButton
                  key={method}
                  title={method === "contado" ? "Contado" : "Crédito"}
                  onPress={() => setPaymentMethod(method)}
                  variant={active ? "primary" : "muted"}
                  className="flex-1"
                />
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

        <View className="rounded-2xl bg-slate-50 px-4 py-4">
          <Text className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">Condición detectada</Text>
          <Text className="mt-2 text-[15px] text-slate-700">Monto: S/{grossAmount.toFixed(2)} · RUC: {clientRuc}</Text>
          <Text className="mt-1 text-[15px] text-slate-700">Retención sugerida: {summaryEnabled ? "Activa" : "Inactiva"}</Text>
        </View>

        <PrimaryButton
          title="Ver resumen"
          onPress={() => navigation.navigate("Summary", { workerName, clientRuc, clientName, grossAmount, paymentMethod, retentionEnabled: summaryEnabled })}
        />
      </View>
    </ScreenShell>
  );
}