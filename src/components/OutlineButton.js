import { Pressable, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#0057A8",
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginVertical: 4,
  },
  text: {
    color: "#0057A8",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export function OutlineButton({ title, onPress, className = "" }) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}