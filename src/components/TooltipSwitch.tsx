import { useState } from "react";
import { Modal, Pressable, Switch, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type TooltipSwitchProps = {
  label: string;
  value: boolean;
  onValueChange: (nextValue: boolean) => void;
  tooltip: string;
};

export function TooltipSwitch({ label, value, onValueChange, tooltip }: TooltipSwitchProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-1 pr-3">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-slate-900">{label}</Text>
            <Pressable onPress={() => setVisible(true)} className="ml-2 h-5 w-5 items-center justify-center rounded-full bg-slate-100">
              <Feather name="info" size={12} color="#334155" />
            </Pressable>
          </View>
          <Text className="mt-1 text-[12px] text-slate-500">Aplica solo cuando corresponde al recibo.</Text>
        </View>
        <Switch value={value} onValueChange={onValueChange} trackColor={{ false: "#CBD5E1", true: "#B6D7F5" }} thumbColor={value ? "#0057A8" : "#F8FAFC"} />
      </View>

      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <Pressable className="flex-1 justify-center bg-slate-900/50 px-6" onPress={() => setVisible(false)}>
          <View className="rounded-3xl bg-white p-5">
            <Text className="text-base font-semibold text-slate-900">Retención 8%</Text>
            <Text className="mt-2 text-[14px] leading-6 text-slate-600">{tooltip}</Text>
            <Text className="mt-4 text-[12px] font-semibold text-primary">Toca fuera para cerrar</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}