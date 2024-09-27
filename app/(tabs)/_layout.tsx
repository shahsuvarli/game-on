import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: Colors.lightPrimary,
        },
        tabBarLabel: () => {
          return null;
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Mafia",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="game-controller"
                size={24}
                color={focused ? "#fff" : "#bebebe"}
              />
            );
          },
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          headerStyle: {
            backgroundColor: Colors.lightPrimary,
          },
          headerTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="information-circle"
                size={27}
                color={focused ? "#fff" : "#bebebe"}
              />
            );
          },
          tabBarActiveTintColor: "#fff",
          headerStyle: {
            backgroundColor: Colors.lightPrimary,
          },
          headerTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
