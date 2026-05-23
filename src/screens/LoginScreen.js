import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { OutlineButton } from "@/components/OutlineButton";
import { ScreenShell } from "@/components/ScreenShell";

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
  inputContainer: {
    marginTop: 24,
    gap: 16,
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

export function LoginScreen({ navigation }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScreenShell title="SUNAT SOL" subtitle="Emite Recibos por Honorarios Electrónicos con un flujo claro y directo.">
      <View style={styles.headerCard}>
        <Text style={styles.headerLabel}>Acceso del trabajador</Text>
        <Text style={styles.headerTitle}>Tu gestión tributaria, simplificada.</Text>
      </View>

      <View style={styles.inputContainer}>
        <FloatingLabelInput label="DNI / RUC" value={identifier} onChangeText={setIdentifier} keyboardType="number-pad" maxLength={11} />
        <FloatingLabelInput label="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
        <PrimaryButton title="Ingresar" onPress={() => navigation.replace("Home", { workerName: "María" })} disabled={identifier.length < 8 || password.length < 6} />
        <OutlineButton title="Crear cuenta" onPress={() => navigation.navigate("Register")} />
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Registro rápido</Text>
        <Text style={styles.infoText}>Si aún no tienes cuenta, el flujo de registro quedará conectado al backend Supabase con RLS.</Text>
      </View>
    </ScreenShell>
  );
}