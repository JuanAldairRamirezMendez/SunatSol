import { ScrollView, Text, View } from "react-native";

export function ScreenShell({ title, subtitle, children, padded = true }) {
  return (
    <View className="flex-1 bg-background">
      <View className="absolute left-[-64px] top-[-40px] h-48 w-48 rounded-full bg-primary/10" />
      <View className="absolute right-[-48px] top-20 h-36 w-36 rounded-full bg-alert/10" />
      <ScrollView contentContainerClassName={`pb-10 ${padded ? "px-5 pt-14" : ""}`} showsVerticalScrollIndicator={false}>
        <Text className="text-[24px] font-bold text-slate-900">{title}</Text>
        {subtitle ? <Text className="mt-2 text-[16px] leading-6 text-slate-600">{subtitle}</Text> : null}
        <View className="mt-6">{children}</View>
      </ScrollView>
    </View>
  );
}