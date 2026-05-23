import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { dashboardNotifications } from "@/data/dashboard";

export function NotificacionesScreen({ navigation }) {
  const [items, setItems] = useState(dashboardNotifications);
  const unreadCount = useMemo(() => items.filter((item) => item.unread).length, [items]);

  const markAsRead = (index) => {
    setItems((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, unread: false } : item)));
  };

  const markAllAsRead = () => {
    setItems((current) => current.map((item) => ({ ...item, unread: false })));
  };

  return (
    <ScreenShell title="Notificaciones" subtitle="Avisos de emisión, recordatorios tributarios y novedades de tu cuenta.">
      <View className="rounded-[28px] bg-primary p-5">
        <Text className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/75">Bandeja</Text>
        <Text className="mt-2 text-[26px] font-bold text-white">{unreadCount} sin leer</Text>
        <Pressable onPress={markAllAsRead} className="mt-4 self-start rounded-full bg-white/15 px-4 py-2">
          <Text className="text-[13px] font-semibold text-white">Marcar todo como leído</Text>
        </Pressable>
      </View>

      <View className="mt-6 gap-3">
        {items.map((item, index) => (
          <Pressable key={`${item.title}-${index}`} onPress={() => markAsRead(index)} className="rounded-3xl bg-white p-4 shadow-soft">
            <View className="flex-row items-start gap-3">
              <View className={`mt-1 h-10 w-10 items-center justify-center rounded-2xl ${item.unread ? "bg-alert/10" : "bg-slate-100"}`}>
                <Feather name={item.unread ? "bell" : "check"} size={18} color={item.unread ? "#EF9F27" : "#64748B"} />
              </View>
              <View className="flex-1">
                <View className="flex-row items-center justify-between">
                  <Text className="flex-1 pr-3 text-[15px] font-semibold text-slate-900">{item.title}</Text>
                  {item.unread ? <View className="h-2.5 w-2.5 rounded-full bg-alert" /> : null}
                </View>
                <Text className="mt-1 text-[13px] leading-5 text-slate-600">{item.message}</Text>
                <Text className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.time}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <Pressable onPress={() => navigation.goBack()} className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border border-primary px-4 py-4">
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text className="text-[15px] font-semibold text-primary">Volver al inicio</Text>
      </Pressable>
    </ScreenShell>
  );
}