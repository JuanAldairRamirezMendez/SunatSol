import { Text, View } from "react-native";

export function StepProgressBar({ progress, label }) {
  const safeProgress = Math.max(0, Math.min(progress, 100));

  return (
    <View>
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label ?? "Progreso"}</Text>
        <Text className="text-[12px] font-bold text-primary">{safeProgress}%</Text>
      </View>
      <View className="h-2 overflow-hidden rounded-full bg-slate-200">
        <View className="h-2 rounded-full bg-primary" style={{ width: `${safeProgress}%` }} />
      </View>
    </View>
  );
}