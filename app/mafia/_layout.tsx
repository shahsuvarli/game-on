import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useNavigation } from "expo-router";
import { Pressable, View } from "react-native";

export default function MafiaLayout() {
  const navigation = useNavigation<any>();
  const resetGame = useMafiaStore((state) => state.resetGame);

  function hanldeHomePress() {
    resetGame();
    navigation.replace("(tabs)");
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="players"
        options={{
          headerShown: true,
          headerTitle: "Choose characters",
          headerLeft: () => {
            return (
              <Pressable
                onPress={hanldeHomePress}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons name="home" size={25} color="#0000009d" />
              </Pressable>
            );
          },
        }}
      />
      <Stack.Screen
        name="game-start"
        options={{
          title: "",
          headerShown: true,
          headerBackground: () => {
            return (
              <View style={{ flex: 1, backgroundColor: Colors.mafiaPrimary }} />
            );
          },
          headerLeft: () => {
            return (
              <Pressable
                onPress={hanldeHomePress}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderStyle: "solid",
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 100,
                  padding: 8,
                }}
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
          title: "Type & Submit",
          headerShown: true,
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
                onPress={hanldeHomePress}
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
