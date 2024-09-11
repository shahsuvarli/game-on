import { useMafiaStore } from "@/store/context";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
// const

export default function GameStart() {
  const navigation = useNavigation<any>();
  const counter = useMafiaStore((state) => state.counter);
  const updateCounter = useMafiaStore((state) => state.updateCounter);

  function press() {
    updateCounter();
    navigation.replace("player-card");
  }

  return (
    <LinearGradient style={styles.titleContainer} colors={["#fff", "#ff1111"]}>
      <StatusBar style="dark" />
      <View
        style={styles.card}
        // onPress={() => navigation.navigate("game-start")}
      >
        <Pressable
          style={{
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 100,
            height: 200,
            width: 200,
            justifyContent: "center",
            gap: 16,
            alignItems: "center",
            backgroundColor: "#fff",
          }}
          onPress={press}
        >
          <Text style={styles.cardText}>Touch to open</Text>
          <MaterialIcons name="touch-app" size={30} color="#ffa200" />
          <Text style={{ color: "#0000005d" }}>{counter} cards left</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    height: "100%",
    gap: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 17,
    opacity: 0.8,
  },
  card: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardText: {
    fontSize: 20,
    opacity: 0.8,
  },
});
