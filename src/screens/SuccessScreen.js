import { Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { OutlineButton } from "@/components/OutlineButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { formatCurrency } from "@/lib/receipt";

const actions = [
  { title: "Descargar PDF", icon: "download-outline" },
  { title: "Enviar Email", icon: "email-outline" },
  { title: "Nuevo Recibo", icon: "plus-circle-outline" },
];

export function SuccessScreen({ navigation, route }) {
  const { workerName, receiptNumber, clientName, totalAmount } = route.params;

  return (
    <ScreenShell title="Recibo emitido" subtitle={`El RHE quedó generado correctamente para ${clientName}.`}>
      <View className="items-center rounded-[32px] bg-white px-6 py-8 shadow-soft">
        <View className="h-20 w-20 items-center justify-center rounded-full bg-success/10">
          <Feather name="check" size={38} color="#1D9E75" />
        </View>
        <Text className="mt-5 text-[24px] font-bold text-slate-900">{receiptNumber}</Text>
        <Text className="mt-2 text-[14px] text-slate-600">Total: {formatCurrency(totalAmount)}</Text>
        <Text className="mt-1 text-[12px] text-slate-500">Emitido por {workerName}</Text>
      </View>

      <View className="mt-6 gap-3">
        {actions.map((action) => (
          <View key={action.title} className="rounded-2xl bg-white px-4 py-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <MaterialCommunityIcons name={action.icon} size={22} color="#0057A8" />
                <Text className="text-[15px] font-semibold text-slate-900">{action.title}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#94A3B8" />
            </View>
          </View>
        ))}
      </View>

      <View className="mt-6 gap-3">
        <PrimaryButton title="Nuevo Recibo" onPress={() => navigation.replace("Home", { workerName })} />
        <OutlineButton title="Volver al inicio" onPress={() => navigation.replace("Home", { workerName })} />
      </View>
    </ScreenShell>
  );
}