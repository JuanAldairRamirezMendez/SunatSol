import { Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { rucProfile } from "@/data/dashboard";

export function MiRUCScreen({ navigation }) {
  return (
    <ScreenShell title="Mi RUC" subtitle="Consulta la información principal del contribuyente y su estado en la app.">
      <View className="rounded-[28px] bg-primary p-5">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/75">Estado</Text>
        <Text className="mt-2 text-[26px] font-bold text-white">{rucProfile.condition}</Text>
        <Text className="mt-2 text-[14px] text-white/85">{rucProfile.businessName}</Text>
      </View>

      <View className="mt-6 gap-3">
        {[
          { label: "Razón social", value: rucProfile.legalName, icon: "account" },
          { label: "RUC", value: "10734521890", icon: "badge-account-horizontal" },
          { label: "Régimen", value: rucProfile.regime, icon: "shield-account" },
          { label: "Actividad", value: rucProfile.activity, icon: "briefcase" },
          { label: "Inicio de actividad", value: rucProfile.startDate, icon: "calendar" },
          { label: "Representante", value: rucProfile.representative, icon: "account-tie" },
        ].map((item) => (
          <View key={item.label} className="flex-row items-start gap-3 rounded-3xl bg-white p-4 shadow-soft">
            <View className="h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
              <MaterialCommunityIcons name={item.icon} size={20} color="#0057A8" />
            </View>
            <View className="flex-1">
              <Text className="text-[12px] uppercase tracking-[0.18em] text-slate-400">{item.label}</Text>
              <Text className="mt-1 text-[15px] font-semibold text-slate-900">{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      <View className="mt-4 rounded-3xl bg-white p-4 shadow-soft">
        <Text className="text-[16px] font-semibold text-slate-900">Validaciones disponibles</Text>
        <Text className="mt-2 text-[13px] leading-5 text-slate-600">El prototipo mostraba un acceso dedicado al RUC. En la versión móvil este módulo funciona como consulta rápida de perfil y estado tributario.</Text>
      </View>

      <View className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border border-primary px-4 py-4">
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text onPress={() => navigation.goBack()} className="text-[15px] font-semibold text-primary">Volver al inicio</Text>
      </View>
    </ScreenShell>
  );
}