import { useState } from "react";
import { Text, View } from "react-native";

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { OutlineButton } from "@/components/OutlineButton";
import { ScreenShell } from "@/components/ScreenShell";

export function LoginScreen({ navigation }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScreenShell title="SUNAT SOL" subtitle="Emite Recibos por Honorarios Electrónicos con un flujo claro y directo.">
      <View className="rounded-3xl bg-primary p-5">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/75">Acceso del trabajador</Text>
        <Text className="mt-2 text-[20px] font-semibold text-white">Tu gestión tributaria, simplificada.</Text>
      </View>

      <View className="mt-6 gap-4">
        <FloatingLabelInput label="DNI / RUC" value={identifier} onChangeText={setIdentifier} keyboardType="number-pad" maxLength={11} />
        <FloatingLabelInput label="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
        <PrimaryButton title="Ingresar" onPress={() => navigation.replace("Home", { workerName: "María" })} disabled={identifier.length < 8 || password.length < 6} />
        <OutlineButton title="Crear cuenta" onPress={() => navigation.navigate("Register")} />
      </View>

      <View className="mt-6 rounded-3xl bg-white p-4">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">Registro rápido</Text>
        <Text className="mt-2 text-[14px] leading-6 text-slate-600">Si aún no tienes cuenta, el flujo de registro quedará conectado al backend Supabase con RLS.</Text>
      </View>
    </ScreenShell>
  );
}