import { Pressable, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  primary: {
    backgroundColor: "#0057A8",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginVertical: 4,
  },
  light: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#0057A8",
    marginVertical: 4,
  },
  muted: {
    backgroundColor: "#F1F5F9",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginVertical: 4,
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  lightText: {
    color: "#0057A8",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  mutedText: {
    color: "#1F2937",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  disabled: {
    opacity: 0.6,
  },
});

export function PrimaryButton({ title, onPress, className = "", disabled = false, variant = "primary" }) {
  const variantStyle = variant === "primary" ? styles.primary : variant === "light" ? styles.light : styles.muted;
  const textStyle = variant === "primary" ? styles.primaryText : variant === "light" ? styles.lightText : styles.mutedText;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[variantStyle, disabled && styles.disabled]}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}