import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.18,
    textTransform: "uppercase",
    color: "#94A3B8",
  },
  percentage: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0057A8",
  },
  barContainer: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#E2E8F0",
  },
  barFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0057A8",
  },
});

export function StepProgressBar({ progress, label }) {
  const safeProgress = Math.max(0, Math.min(progress, 100));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label ?? "Progreso"}</Text>
        <Text style={styles.percentage}>{safeProgress}%</Text>
      </View>
      <View style={styles.barContainer}>
        <View style={[styles.barFill, { width: `${safeProgress}%` }]} />
      </View>
    </View>
  );
}