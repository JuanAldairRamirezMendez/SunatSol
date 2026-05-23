import { View, Text, StyleSheet } from "react-native";
import { ScreenShell } from "@/components/ScreenShell";
import { PrimaryButton } from "@/components/PrimaryButton";

const styles = StyleSheet.create({
  headerCard: {
    borderRadius: 24,
    backgroundColor: "#0057A8",
    padding: 20,
    marginVertical: 8,
  },
  headerLabel: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.24,
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.75)",
  },
  headerTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  infoCard: {
    marginTop: 24,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.18,
    textTransform: "uppercase",
    color: "#94A3B8",
  },
  infoText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 24,
    color: "#475569",
  },
});

export function HomeScreen({ navigation, route }) {
  const { workerName = "Usuario" } = route?.params || {};

  return (
    <ScreenShell title="Dashboard" subtitle={`Bienvenido, ${workerName}`}>
      <View style={styles.headerCard}>
        <Text style={styles.headerLabel}>Menú Principal</Text>
        <Text style={styles.headerTitle}>Gestiona tus recibos y reportes</Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Nuevo Recibo"
          onPress={() =>
            navigation.navigate("Step1_ClientData", { workerName })
          }
        />
        <PrimaryButton
          title="Mis Recibos"
          onPress={() => navigation.navigate("MisRecibos")}
        />
        <PrimaryButton
          title="Reportes"
          onPress={() => navigation.navigate("Reportes")}
        />
        <PrimaryButton
          title="Notificaciones"
          onPress={() => navigation.navigate("Notificaciones")}
        />
        <PrimaryButton
          title="Mi RUC"
          onPress={() => navigation.navigate("MiRUC")}
        />
        <PrimaryButton
          title="Beneficios"
          onPress={() => navigation.navigate("Beneficios")}
        />
        <PrimaryButton
          title="Declarar"
          onPress={() => navigation.navigate("Declarar")}
        />
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Información</Text>
        <Text style={styles.infoText}>
          Desde aquí puedes acceder a todas las funciones de SUNAT SOL para
          gestionar tus recibos por honorarios electrónicos.
        </Text>
      </View>
    </ScreenShell>
  );
}
