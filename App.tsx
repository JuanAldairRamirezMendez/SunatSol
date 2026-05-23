import "react-native-gesture-handler";
import "./global.css";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { View } from "react-native";

import { colors } from "@/theme/tokens";
import { RootStackParamList } from "@/navigation/types";
import { LoginScreen } from "@/screens/LoginScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { Step1ClientDataScreen } from "@/screens/Step1ClientDataScreen";
import { Step2TaxDetailsScreen } from "@/screens/Step2TaxDetailsScreen";
import { SummaryScreen } from "@/screens/SummaryScreen";
import { SuccessScreen } from "@/screens/SuccessScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      animation: "slide_from_right" as const,
      contentStyle: { backgroundColor: colors.background },
    }),
    []
  );

  if (!fontsLoaded) {
    return <View className="flex-1 bg-background" />;
  }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Step1_ClientData" component={Step1ClientDataScreen} />
        <Stack.Screen name="Step2_TaxDetails" component={Step2TaxDetailsScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}