import { Pressable, Text } from "react-native";

export function OutlineButton({ title, onPress, className = "" }) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-2xl border border-primary bg-transparent px-5 py-4 active:opacity-80 ${className}`}
    >
      <Text className="text-center text-base font-semibold text-primary">{title}</Text>
    </Pressable>
  );
}