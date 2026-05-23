import { ScrollView, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  bgDecor1: {
    position: "absolute",
    left: -64,
    top: -40,
    width: 192,
    height: 192,
    borderRadius: 96,
    backgroundColor: "rgba(0, 87, 168, 0.1)",
  },
  bgDecor2: {
    position: "absolute",
    right: -48,
    top: 80,
    width: 144,
    height: 144,
    borderRadius: 72,
    backgroundColor: "rgba(239, 159, 39, 0.1)",
  },
  scrollContent: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 56,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    color: "#475569",
  },
  childrenContainer: {
    marginTop: 24,
  },
});

export function ScreenShell({ title, subtitle, children, padded = true }) {
  return (
    <View style={styles.container}>
      <View style={styles.bgDecor1} />
      <View style={styles.bgDecor2} />
      <ScrollView contentContainerStyle={padded ? styles.scrollContent : { paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <View style={styles.childrenContainer}>{children}</View>
      </ScrollView>
    </View>
  );
}