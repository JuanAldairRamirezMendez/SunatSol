import { Alert, Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { dashboardReceipts } from "@/data/dashboard";
import { formatCurrency } from "@/lib/receipt";

export function MisRecibosScreen({ navigation }) {
  const emitidos = dashboardReceipts.filter((receipt) => receipt.status === "emitido");
  const total = emitidos.reduce((sum, receipt) => sum + receipt.netAmount, 0);

  return (
    <ScreenShell title="Mis recibos" subtitle="Revisa tus RHE emitidos, su estado y el importe neto recibido.">
      <View className="rounded-[28px] bg-primary p-5">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/75">Resumen</Text>
        <Text className="mt-2 text-[26px] font-bold text-white">{emitidos.length} emitidos</Text>
        <Text className="mt-2 text-[14px] text-white/85">Total neto recibido: {formatCurrency(total)}</Text>
      </View>

      <View className="mt-6 gap-3">
        {dashboardReceipts.map((receipt) => (
          <Pressable
            key={receipt.number}
            onPress={() => Alert.alert(receipt.number, `${receipt.clientName}\n${receipt.paymentMethod}\nNeto: ${formatCurrency(receipt.netAmount)}`)}
            className="rounded-3xl bg-white p-4 shadow-soft"
          >
            <View className="flex-row items-start justify-between">
              <View className="flex-1 pr-3">
                <Text className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">{receipt.number}</Text>
                <Text className="mt-2 text-[16px] font-semibold text-slate-900">{receipt.clientName}</Text>
                <Text className="mt-1 text-[13px] text-slate-500">{receipt.date} · {receipt.paymentMethod}</Text>
              </View>
              <View className={`rounded-full px-3 py-1 ${receipt.status === "emitido" ? "bg-success/10" : receipt.status === "pendiente" ? "bg-alert/10" : "bg-slate-100"}`}>
                <Text className={`text-[11px] font-semibold ${receipt.status === "emitido" ? "text-success" : receipt.status === "pendiente" ? "text-alert" : "text-slate-600"}`}>
                  {receipt.status}
                </Text>
              </View>
            </View>

            <View className="mt-4 flex-row items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <View>
                <Text className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Neto</Text>
                <Text className="mt-1 text-[18px] font-bold text-primary">{formatCurrency(receipt.netAmount)}</Text>
              </View>
              <View className="items-end">
                <Text className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Bruto</Text>
                <Text className="mt-1 text-[14px] font-semibold text-slate-700">{formatCurrency(receipt.amount)}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <Pressable onPress={() => navigation.goBack()} className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border border-primary px-4 py-4">
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text className="text-[15px] font-semibold text-primary">Volver al inicio</Text>
      </Pressable>
    </ScreenShell>
  );
}