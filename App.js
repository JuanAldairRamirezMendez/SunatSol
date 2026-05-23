import "react-native-gesture-handler";
import "./global.css";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { View } from "react-native";

import { colors } from "@/theme/tokens";
import { LoginScreen } from "@/screens/LoginScreen";
import { RegisterScreen } from "@/screens/RegisterScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { Step1ClientDataScreen } from "@/screens/Step1ClientDataScreen";
import { Step2TaxDetailsScreen } from "@/screens/Step2TaxDetailsScreen";
import { SummaryScreen } from "@/screens/SummaryScreen";
import { SuccessScreen } from "@/screens/SuccessScreen";
import { MisRecibosScreen } from "@/screens/MisRecibosScreen";
import { NotificacionesScreen } from "@/screens/NotificacionesScreen";
import { ReportesScreen } from "@/screens/ReportesScreen";
import { DeclararScreen } from "@/screens/DeclararScreen";
import { MiRUCScreen } from "@/screens/MiRUCScreen";
import { BeneficiosScreen } from "@/screens/BeneficiosScreen";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    primary: colors.primary,
    text: "#0F172A",
    border: "#E5E7EB",
    notification: colors.alert,
  },
};

export default function App() {
  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      animation: "slide_from_right",
      contentStyle: { backgroundColor: colors.background },
    }),
    []
  );

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Step1_ClientData" component={Step1ClientDataScreen} />
        <Stack.Screen name="Step2_TaxDetails" component={Step2TaxDetailsScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="MisRecibos" component={MisRecibosScreen} />
        <Stack.Screen name="Notificaciones" component={NotificacionesScreen} />
        <Stack.Screen name="Reportes" component={ReportesScreen} />
        <Stack.Screen name="Declarar" component={DeclararScreen} />
        <Stack.Screen name="MiRUC" component={MiRUCScreen} />
        <Stack.Screen name="Beneficios" component={BeneficiosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}