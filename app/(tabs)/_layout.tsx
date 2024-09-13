import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Games",
          tabBarIcon: () => {
            return <Ionicons name="game-controller" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Explore",
          tabBarIcon: () => {
            return <Ionicons name="settings" size={24} color="black" />;
          },
        }}
      />
    </Tabs>
  );
}
