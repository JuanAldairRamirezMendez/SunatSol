import { Pressable, Text, View } from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "light" | "muted";
};

const variantStyles = {
  primary: "bg-primary",
  light: "bg-white",
  muted: "bg-slate-100",
} as const;

const textStyles = {
  primary: "text-white",
  light: "text-primary",
  muted: "text-slate-900",
} as const;

export function PrimaryButton({ title, onPress, className = "", disabled = false, variant = "primary" }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`overflow-hidden rounded-2xl px-5 py-4 active:opacity-90 ${variantStyles[variant]} ${disabled ? "opacity-60" : ""} ${className}`}
    >
      <View>
        <Text className={`text-center text-base font-bold ${textStyles[variant]}`}>{title}</Text>
      </View>
    </Pressable>
  );
}