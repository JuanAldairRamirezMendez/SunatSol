import { ReactNode } from "react";
import { Text, View } from "react-native";

type SummaryCardProps = {
  title: string;
  children: ReactNode;
};

export function SummaryCard({ title, children }: SummaryCardProps) {
  return (
    <View className="rounded-3xl bg-white p-5 shadow-soft">
      <Text className="text-[16px] font-semibold text-slate-900">{title}</Text>
      <View className="mt-4">{children}</View>
    </View>
  );
}