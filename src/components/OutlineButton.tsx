import { Pressable, Text } from "react-native";

type OutlineButtonProps = {
  title: string;
  onPress: () => void;
  className?: string;
};

export function OutlineButton({ title, onPress, className = "" }: OutlineButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-2xl border border-primary bg-transparent px-5 py-4 active:opacity-80 ${className}`}
    >
      <Text className="text-center text-base font-semibold text-primary">{title}</Text>
    </Pressable>
  );
}