import { useState } from "react";
import { Text, View } from "react-native";

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { OutlineButton } from "@/components/OutlineButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ScreenShell } from "@/components/ScreenShell";

export function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = fullName.trim().length > 3 && docNumber.trim().length >= 8 && email.includes("@") && password.length >= 6;

  return (
    <ScreenShell title="Crear cuenta" subtitle="Registro rápido para continuar con el flujo de emisión en la app móvil.">
      <View className="rounded-3xl bg-primary p-5">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/75">Alta de usuario</Text>
        <Text className="mt-2 text-[20px] font-semibold text-white">Tu acceso quedará listo en minutos.</Text>
      </View>

      <View className="mt-6 gap-4">
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