import { useMafiaStore } from "@/store/context";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Stack, useNavigation, router } from "expo-router";
import { Pressable, Text } from "react-native";

export default function MafiaLayout() {
  const navigation = useNavigation<any>();
  const updateCounter = useMafiaStore((state) => state.updateCounter);
  const count = useMafiaStore((state) => state.count);
  const counter = useMafiaStore((state) => state.counter);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="number"
        options={{
          title: "Number of players",
          headerShown: true,
          headerTitle: "Player count",
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => navigation.navigate("index")}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Feather name="chevron-left" size={27} color="black" />
                <Text style={{ fontSize: 17 }}>Games</Text>
              </Pressable>
            );
          },
        }}
      />
      <Stack.Screen
        name="players"
        options={{
          title: "Players",
          headerShown: true,
          headerTitle: "Players",
          headerBackTitle: "Number",
        }}
      />
      <Stack.Screen
        name="player-info"
        options={{
          title: "Player info",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="game-start"
        options={{
          title: "",
          headerShown: true,
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => navigation.navigate("number")}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons name="home" size={25} color="#0000009d" />
              </Pressable>
            );
          },
        }}
      />
      <Stack.Screen
        name="player-card"
        options={{
          title: "Player Card",
          headerShown: false,
          presentation: "containedModal",
        }}
      />
      <Stack.Screen
        name="final-page"
        options={{
          title: "Final page",
          headerShown: true,
          headerTitle: "Players",
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => navigation.navigate("number")}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons name="home" size={25} color="#0000009d" />
              </Pressable>
            );
          },
        }}
      />
    </Stack>
  );
}
