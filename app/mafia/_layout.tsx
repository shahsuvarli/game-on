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
  const resetGame = useMafiaStore((state) => state.resetGame);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
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
                onPress={() => {
                  resetGame();
                  navigation.navigate("players");
                }}
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
                onPress={() => {
                  resetGame();
                  navigation.navigate("players");
                }}
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
