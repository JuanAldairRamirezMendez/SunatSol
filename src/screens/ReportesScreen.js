import { Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { dashboardReceipts, reportMonthlyTrend } from "@/data/dashboard";
import { formatCurrency } from "@/lib/receipt";

export function ReportesScreen({ navigation }) {
  const grossTotal = dashboardReceipts.reduce((sum, receipt) => sum + receipt.amount, 0);
  const netTotal = dashboardReceipts.reduce((sum, receipt) => sum + receipt.netAmount, 0);
  const retentionTotal = grossTotal - netTotal;
  const maxMonth = Math.max(...reportMonthlyTrend.map((item) => item.value));

  return (
    <ScreenShell title="Reportes e historial" subtitle="Revisa tus ingresos, retenciones y evolución de emisión por periodo.">
      <View className="flex-row flex-wrap gap-3">
        <View className="w-[48%] rounded-3xl bg-white p-4 shadow-soft">
          <MaterialCommunityIcons name="cash-multiple" size={22} color="#0057A8" />
          <Text className="mt-3 text-[12px] uppercase tracking-[0.18em] text-slate-500">Bruto</Text>
          <Text className="mt-1 text-[20px] font-bold text-slate-900">{formatCurrency(grossTotal)}</Text>
        </View>
        <View className="w-[48%] rounded-3xl bg-white p-4 shadow-soft">
          <MaterialCommunityIcons name="bank-transfer-out" size={22} color="#1D9E75" />
          <Text className="mt-3 text-[12px] uppercase tracking-[0.18em] text-slate-500">Neto</Text>
          <Text className="mt-1 text-[20px] font-bold text-slate-900">{formatCurrency(netTotal)}</Text>
        </View>
      </View>

      <View className="mt-3 rounded-3xl bg-white p-4 shadow-soft">
        <Text className="text-[16px] font-semibold text-slate-900">Tendencia mensual</Text>
        <View className="mt-5 flex-row items-end justify-between gap-2">
          {reportMonthlyTrend.map((item) => {
            const height = Math.max(24, (item.value / maxMonth) * 120);
            return (
              <View key={item.label} className="flex-1 items-center">
                <View className="w-full justify-end rounded-t-2xl bg-slate-100 px-2" style={{ height: 136 }}>
                  <View className="rounded-t-2xl bg-primary" style={{ height }} />
                </View>
                <Text className="mt-2 text-[11px] font-semibold text-slate-500">{item.label}</Text>
                <Text className="mt-1 text-[11px] text-slate-400">{formatCurrency(item.value)}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View className="mt-3 rounded-3xl bg-white p-4 shadow-soft">
        <View className="flex-row items-center justify-between">
          <Text className="text-[16px] font-semibold text-slate-900">Retenciones</Text>
          <Text className="text-[14px] font-bold text-alert">{formatCurrency(retentionTotal)}</Text>
        </View>
        <Text className="mt-2 text-[13px] leading-5 text-slate-600">El resumen mezcla tus últimos recibos emitidos y te ayuda a identificar el impacto de la retención del 8%.</Text>
      </View>

      <View className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border border-primary px-4 py-4">
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text onPress={() => navigation.goBack()} className="text-[15px] font-semibold text-primary">Volver al inicio</Text>
      </View>
    </ScreenShell>
  );
}