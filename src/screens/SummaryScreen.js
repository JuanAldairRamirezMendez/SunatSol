import { useMemo } from "react";
import { Text, View } from "react-native";

import { OutlineButton } from "@/components/OutlineButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { SummaryCard } from "@/components/SummaryCard";
import { buildReceiptNumber, calculateRetention, formatCurrency } from "@/lib/receipt";

export function SummaryScreen({ navigation, route }) {
  const { workerName, clientName, grossAmount, paymentMethod, retentionEnabled } = route.params;
  const retentionAmount = calculateRetention(grossAmount, retentionEnabled);
  const totalAmount = grossAmount - retentionAmount;
  const receiptNumber = useMemo(() => buildReceiptNumber(), []);

  return (
    <ScreenShell title="Resumen de emisión" subtitle={`Revisa los valores finales antes de confirmar, ${workerName}.`}>
      <SummaryCard title="Desglose del recibo">
        <View className="gap-4">
          <View className="flex-row justify-between">
            <Text className="text-[14px] text-slate-600">Bruto</Text>
            <Text className="text-[14px] font-semibold text-slate-900">{formatCurrency(grossAmount)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-[14px] text-alert">Retención</Text>
            <Text className="text-[14px] font-semibold text-alert">- {formatCurrency(retentionAmount)}</Text>
          </View>
          <View className="h-px bg-slate-200" />
          <View className="flex-row justify-between">
            <Text className="text-[14px] text-slate-600">Total</Text>
            <Text className="text-[18px] font-bold text-primary">{formatCurrency(totalAmount)}</Text>
          </View>
          <Text className="text-[12px] text-slate-500">Forma de pago: {paymentMethod}</Text>
          <Text className="text-[12px] text-slate-500">Cliente: {clientName}</Text>
        </View>
      </SummaryCard>

      <View className="mt-6 gap-3">
        <PrimaryButton title="Confirmar emisión" onPress={() => navigation.replace("Success", { workerName, receiptNumber, clientName, totalAmount })} />
        <OutlineButton title="Volver a editar" onPress={() => navigation.goBack()} />
      </View>
    </ScreenShell>
  );
}