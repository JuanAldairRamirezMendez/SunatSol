import { Text, View, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { OutlineButton } from "@/components/OutlineButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";
import { formatCurrency } from "@/lib/receipt";

const actions = [
  { title: "Descargar PDF", icon: "download-outline" },
  { title: "Enviar Email", icon: "email-outline" },
  { title: "Nuevo Recibo", icon: "plus-circle-outline" },
];

const styles = StyleSheet.create({
  successCard: {
    alignItems: "center",
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 50,
    elevation: 5,
  },
  checkCircle: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#1D9E751A",
  },
  receiptNumber: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
  },
  totalText: {
    marginTop: 8,
    fontSize: 14,
    color: "#475569",
  },
  issuedByText: {
    marginTop: 4,
    fontSize: 12,
    color: "#94A3B8",
  },
  actionsContainer: {
    marginTop: 24,
    gap: 12,
  },
  actionCard: {
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  actionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
  },
  buttonsContainer: {
    marginTop: 24,
    gap: 12,
  },
});

export function SuccessScreen({ navigation, route }) {
  const { workerName, receiptNumber, clientName, totalAmount } = route.params;

  return (
    <ScreenShell title="Recibo emitido" subtitle={`El RHE quedó generado correctamente para ${clientName}.`}>
      <View style={styles.successCard}>
        <View style={styles.checkCircle}>
          <Feather name="check" size={38} color="#1D9E75" />
        </View>
        <Text style={styles.receiptNumber}>{receiptNumber}</Text>
        <Text style={styles.totalText}>Total: {formatCurrency(totalAmount)}</Text>
        <Text style={styles.issuedByText}>Emitido por {workerName}</Text>
      </View>

      <View style={styles.actionsContainer}>
        {actions.map((action) => (
          <View key={action.title} style={styles.actionCard}>
            <View style={styles.actionRow}>
              <View style={styles.actionContent}>
                <MaterialCommunityIcons name={action.icon} size={22} color="#0057A8" />
                <Text style={styles.actionText}>{action.title}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#94A3B8" />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Nuevo Recibo" onPress={() => navigation.replace("Home", { workerName })} />
        <OutlineButton title="Volver al inicio" onPress={() => navigation.replace("Home", { workerName })} />
      </View>
    </ScreenShell>
  );
}