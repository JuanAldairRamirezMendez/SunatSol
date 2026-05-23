import { Alert, Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { declarationChecklist } from "@/data/dashboard";

export function DeclararScreen({ navigation }) {
  return (
    <ScreenShell title="Declarar" subtitle="Resumen de acciones para preparar tu declaración de cuarta categoría.">
      <View className="rounded-[28px] bg-primary p-5">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/75">Periodo activo</Text>
        <Text className="mt-2 text-[26px] font-bold text-white">Mayo 2026</Text>
        <Text className="mt-2 text-[14px] text-white/85">Fecha límite sugerida: 15 de junio 2026.</Text>
      </View>

      <View className="mt-6 gap-3">
        {declarationChecklist.map((item, index) => (
          <View key={item} className="flex-row items-start gap-3 rounded-3xl bg-white p-4 shadow-soft">
            <View className="mt-1 h-8 w-8 items-center justify-center rounded-2xl bg-success/10">
              <Text className="text-[13px] font-bold text-success">{index + 1}</Text>
            </View>
            <Text className="flex-1 text-[15px] leading-6 text-slate-700">{item}</Text>
          </View>
        ))}
      </View>

      <View className="mt-4 rounded-3xl bg-white p-4 shadow-soft">
        <Text className="text-[16px] font-semibold text-slate-900">Acciones rápidas</Text>
        <View className="mt-4 gap-3">
          <Pressable onPress={() => Alert.alert("SUNAT", "Se generará un recordatorio local de declaración.")} className="rounded-2xl bg-slate-50 px-4 py-4">
            <Text className="text-[14px] font-semibold text-slate-900">Programar recordatorio</Text>
          </Pressable>
          <Pressable onPress={() => Alert.alert("SUNAT", "Abrir guía de declaración manual.")} className="rounded-2xl bg-slate-50 px-4 py-4">
            <Text className="text-[14px] font-semibold text-slate-900">Abrir guía de declaración</Text>
          </Pressable>
        </View>
      </View>

      <Pressable onPress={() => navigation.goBack()} className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border border-primary px-4 py-4">
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text className="text-[15px] font-semibold text-primary">Volver al inicio</Text>
      </Pressable>
    </ScreenShell>
  );
}