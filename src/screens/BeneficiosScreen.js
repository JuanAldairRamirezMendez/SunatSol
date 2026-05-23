import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { dashboardBenefits } from "@/data/dashboard";

export function BeneficiosScreen({ navigation }) {
  return (
    <ScreenShell title="Beneficios" subtitle="Resumen de ventajas y reglas útiles que el prototipo mostraba como módulo independiente.">
      <View className="rounded-[28px] bg-primary p-5">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/75">Panel informativo</Text>
        <Text className="mt-2 text-[26px] font-bold text-white">Todo en un solo lugar</Text>
        <Text className="mt-2 text-[14px] text-white/85">Beneficios, retenciones y estado tributario de forma clara para móvil.</Text>
      </View>

      <View className="mt-6 gap-3">
        {dashboardBenefits.map((benefit) => (
          <View key={benefit.title} className="rounded-3xl bg-white p-4 shadow-soft">
            <View className="flex-row items-start gap-3">
              <View className="h-12 w-12 items-center justify-center rounded-2xl bg-alert/10">
                <Text className="text-[13px] font-bold text-alert">{benefit.iconLabel}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-[15px] font-semibold text-slate-900">{benefit.title}</Text>
                <Text className="mt-1 text-[13px] leading-5 text-slate-600">{benefit.detail}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View className="mt-4 rounded-3xl bg-white p-4 shadow-soft">
        <Text className="text-[16px] font-semibold text-slate-900">Sugerencia de implementación</Text>
        <Text className="mt-2 text-[13px] leading-5 text-slate-600">Este módulo puede crecer después con simuladores de deducción, alertas de topes y consejos contextuales según el ingreso anual.</Text>
      </View>

      <View className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border border-primary px-4 py-4">
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text onPress={() => navigation.goBack()} className="text-[15px] font-semibold text-primary">Volver al inicio</Text>
      </View>
    </ScreenShell>
  );
}