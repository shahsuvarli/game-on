import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameStart() {
  const navigation = useNavigation<any>();
  const counter = useMafiaStore((state) => state.counter);
  const randomCard = useMafiaStore((state) => state.randomCard);

  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    navigation.getParent()?.setOptions({ gestureEnabled: false });
    return () => {
      navigation.getParent()?.setOptions({ gestureEnabled: true });
    };
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.06, duration: 900, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 900, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  function press() {
    randomCard();
    navigation.replace("player-card");
  }

  return (
    <SafeAreaView style={styles.root} edges={["bottom"]}>
      <StatusBar style="light" />

      <View style={styles.container}>

        <View style={styles.infoBlock}>
          <Text style={styles.counterLabel}>Cards remaining</Text>
          <Text style={styles.counter}>{counter}</Text>
        </View>

        <Animated.View style={{ transform: [{ scale: pulse }] }}>
          <Pressable
            onPress={press}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          >
            <MaterialIcons name="touch-app" size={36} color={Colors.cyan} />
            <Text style={styles.cardText}>Touch to open</Text>
          </Pressable>
        </Animated.View>

        <Text style={styles.hint}>Pass the phone to the next player</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    paddingHorizontal: 32,
  },

  // Counter
  infoBlock: {
    alignItems: "center",
    gap: 6,
  },
  counterLabel: {
    fontSize: 13,
    color: Colors.muted,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  counter: {
    fontSize: 64,
    fontWeight: "900",
    color: Colors.text,
    letterSpacing: -2,
  },

  // Touch card
  card: {
    width: 210,
    height: 210,
    borderRadius: 105,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: Colors.steel,
    backgroundColor: Colors.card,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    shadowColor: Colors.cyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 8,
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  cardText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
    letterSpacing: 0.5,
  },

  // Hint
  hint: {
    fontSize: 13,
    color: Colors.muted,
    textAlign: "center",
    letterSpacing: 0.3,
  },
});