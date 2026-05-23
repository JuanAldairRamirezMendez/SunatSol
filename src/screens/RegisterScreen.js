import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { OutlineButton } from "@/components/OutlineButton";
import { PrimaryButton } from "@/components/PrimaryButton";
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
});

export function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = fullName.trim().length > 3 && docNumber.trim().length >= 8 && email.includes("@") && password.length >= 6;

  return (
    <ScreenShell title="Crear cuenta" subtitle="Registro rápido para continuar con el flujo de emisión en la app móvil.">
      <View style={styles.headerCard}>
        <Text style={styles.headerLabel}>Alta de usuario</Text>
        <Text style={styles.headerTitle}>Tu acceso quedará listo en minutos.</Text>
      </View>

      <View style={styles.inputContainer}>
        <FloatingLabelInput label="Nombre completo" value={fullName} onChangeText={setFullName} />
        <FloatingLabelInput label="DNI / RUC" value={docNumber} onChangeText={setDocNumber} keyboardType="number-pad" maxLength={11} />
        <FloatingLabelInput label="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <FloatingLabelInput label="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
        <PrimaryButton title="Crear cuenta" onPress={() => navigation.replace("Home", { workerName: fullName.split(" ")[0] || "Nuevo usuario" })} disabled={!canSubmit} />
        <OutlineButton title="Volver a iniciar sesión" onPress={() => navigation.goBack()} />
      </View>
    </ScreenShell>
  );
}