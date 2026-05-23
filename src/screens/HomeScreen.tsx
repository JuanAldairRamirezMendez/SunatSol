import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { RootStackParamList } from "@/navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const shortcuts = [
  { title: "Mis Recibos", icon: "file-document-outline" as const },
  { title: "Declarar", icon: "clipboard-text-outline" as const },
];

const icons = [
  { title: "Mi RUC", icon: "badge-account-outline" as const },
  { title: "Beneficios", icon: "gift-outline" as const },
  { title: "Reportes", icon: "chart-box-outline" as const },
];

export function HomeScreen({ navigation, route }: Props) {
  const workerName = route.params?.workerName ?? "Trabajador independiente";

  return (
    <ScreenShell title={`Hola, ${workerName}`} subtitle="Crea, revisa y comparte tus recibos desde un flujo lineal y sin distracciones.">
      <View className="overflow-hidden rounded-[32px] bg-primary p-6">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">Acción principal</Text>
            <Text className="mt-2 text-[24px] font-bold text-white">Emitir Recibo</Text>
            <Text className="mt-2 text-[14px] leading-6 text-white/85">Prepara el RHE en tres pasos con validaciones claras y total legible.</Text>
          </View>
          <View className="h-20 w-20 items-center justify-center rounded-[28px] bg-white/15">
            <Feather name="arrow-right" size={34} color="#FFFFFF" />
          </View>
        </View>
        <PrimaryButton title="Emitir Recibo" onPress={() => navigation.navigate("Step1_ClientData", { workerName })} className="mt-5" variant="light" />
      </View>

      <View className="mt-6 flex-row gap-3">
        {shortcuts.map((item) => (
          <Pressable key={item.title} className="flex-1 rounded-2xl bg-white p-4 shadow-soft">
            <MaterialCommunityIcons name={item.icon} size={24} color="#0057A8" />
            <Text className="mt-3 text-[14px] font-semibold text-slate-900">{item.title}</Text>
          </Pressable>
        ))}
      </View>

      <View className="mt-6 rounded-3xl bg-white p-4">
        <Text className="text-[16px] font-semibold text-slate-900">Accesos rápidos</Text>
        <View className="mt-4 flex-row justify-between gap-3">
          {icons.map((item) => (
            <View key={item.title} className="flex-1 items-center rounded-2xl bg-slate-50 px-3 py-4">
              <MaterialCommunityIcons name={item.icon} size={22} color="#0057A8" />
              <Text className="mt-2 text-center text-[12px] font-semibold text-slate-700">{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScreenShell>
  );
}