import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useNavigation } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

function HomeButton({
  onPress,
  variant = "plain",
}: {
  onPress: () => void;
  variant?: "plain" | "pill";
}) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => [
        styles.homeBase,
        variant === "pill" && styles.homePill,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name="home" size={20} color={Colors.cyan} />
    </Pressable>
  );
}

export default function MafiaLayout() {
  const navigation = useNavigation<any>();
  const resetGame = useMafiaStore((state) => state.resetGame);

  function handleHomePress() {
    resetGame();
    navigation.replace("(tabs)");
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.bg },
        headerTitleStyle: {
          color: Colors.text,
          fontSize: 16,
          fontWeight: "800",
        },
        contentStyle: { backgroundColor: Colors.bg },
      }}
    >
      <Stack.Screen
        name="players"
        options={{
          headerTitle: "Choose characters",
          headerLeft: () => <HomeButton onPress={handleHomePress} />,
        }}
      />
      <Stack.Screen
        name="game-start"
        options={{
          headerTitle: "Tap to open",
          // headerStyle: { backgroundColor: Colors.card },
          headerLeft: () => <HomeButton onPress={handleHomePress} />,
        }}
      />
      <Stack.Screen
        name="player-card"
        options={{
          headerTitle: "Type & Submit",
          presentation: "containedModal",
          headerLeft: () => <HomeButton onPress={handleHomePress} />,
        }}
      />
      <Stack.Screen
        name="final-page"
        options={{
          headerTitle: "Players",
          headerLeft: () => <HomeButton onPress={handleHomePress} />,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  homeBase: {
    marginLeft: 10,
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  homePill: {
    backgroundColor: Colors.cyanDim,
    borderWidth: 1,
    borderColor: Colors.cyan,
  },
  pressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
});