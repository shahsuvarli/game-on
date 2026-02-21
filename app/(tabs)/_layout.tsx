import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopWidth: 1,
          borderTopColor: "rgba(78,168,222,0.15)",
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: Colors.cyan,
        tabBarInactiveTintColor: Colors.steel,
        tabBarLabelStyle: {
          fontSize: 11,
          letterSpacing: 0.5,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
          headerShown: false,
          headerTitle: "About",
          headerStyle: { backgroundColor: Colors.card },
          headerTintColor: Colors.text,
          headerShadowVisible: false,
        }}
      />
    </Tabs>
  );
}