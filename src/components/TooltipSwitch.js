import { useState } from "react";
import { Modal, Pressable, Switch, Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelContainer: {
    flex: 1,
    paddingRight: 12,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },
  infoButton: {
    marginLeft: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    marginTop: 4,
    fontSize: 12,
    color: "#94A3B8",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(15, 23, 42, 0.5)",
    paddingHorizontal: 24,
  },
  modalContent: {
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },
  modalText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 24,
    color: "#475569",
  },
  modalCloseHint: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: "600",
    color: "#0057A8",
  },
});

export function TooltipSwitch({ label, value, onValueChange, tooltip }) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.labelContainer}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>{label}</Text>
            <Pressable onPress={() => setVisible(true)} style={styles.infoButton}>
              <Feather name="info" size={12} color="#64748B" />
            </Pressable>
          </View>
          <Text style={styles.description}>Aplica solo cuando corresponde al recibo.</Text>
        </View>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: "#CBD5E1", true: "#B6D7F5" }}
          thumbColor={value ? "#0057A8" : "#F8FAFC"}
        />
      </View>

      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.modal} onPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Retención 8%</Text>
            <Text style={styles.modalText}>{tooltip}</Text>
            <Text style={styles.modalCloseHint}>Toca fuera para cerrar</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}