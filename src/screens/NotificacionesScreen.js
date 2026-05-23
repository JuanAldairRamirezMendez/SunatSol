import { useMemo, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ScreenShell } from "@/components/ScreenShell";
import { dashboardNotifications } from "@/data/dashboard";

const styles = StyleSheet.create({
  summaryCard: {
    borderRadius: 28,
    backgroundColor: "#0057A8",
    padding: 20,
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.75)",
    textTransform: "uppercase",
    letterSpacing: 0.22,
  },
  summaryCount: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  markAllButton: {
    marginTop: 16,
    alignSelf: "flex-start",
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  markAllButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  notificationsContainer: {
    marginTop: 24,
    gap: 12,
  },
  notificationCard: {
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 50,
    elevation: 5,
  },
  notificationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  iconContainer: {
    marginTop: 4,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  iconContainerUnread: {
    backgroundColor: "#EF9F271A",
  },
  iconContainerRead: {
    backgroundColor: "#F1F5F9",
  },
  notificationContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    flex: 1,
    paddingRight: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#EF9F27",
  },
  messageText: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 20,
    color: "#475569",
  },
  timeText: {
    marginTop: 8,
    fontSize: 11,
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 0.18,
  },
  backButton: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#0057A8",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0057A8",
  },
});

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
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Bandeja</Text>
        <Text style={styles.summaryCount}>{unreadCount} sin leer</Text>
        <Pressable onPress={markAllAsRead} style={styles.markAllButton}>
          <Text style={styles.markAllButtonText}>Marcar todo como leído</Text>
        </Pressable>
      </View>

      <View style={styles.notificationsContainer}>
        {items.map((item, index) => (
          <Pressable key={`${item.title}-${index}`} onPress={() => markAsRead(index)} style={styles.notificationCard}>
            <View style={styles.notificationRow}>
              <View style={[styles.iconContainer, item.unread ? styles.iconContainerUnread : styles.iconContainerRead]}>
                <Feather name={item.unread ? "bell" : "check"} size={18} color={item.unread ? "#EF9F27" : "#64748B"} />
              </View>
              <View style={styles.notificationContent}>
                <View style={styles.titleRow}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  {item.unread ? <View style={styles.unreadIndicator} /> : null}
                </View>
                <Text style={styles.messageText}>{item.message}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Feather name="arrow-left" size={16} color="#0057A8" />
        <Text style={styles.backButtonText}>Volver al inicio</Text>
      </Pressable>
    </ScreenShell>
  );
}