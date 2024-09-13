import { useMafiaStore } from "@/store/context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function GameStart() {
  const navigation = useNavigation<any>();
  const counter = useMafiaStore((state) => state.counter);
  const randomCard = useMafiaStore((state) => state.randomCard);

  function press() {
    randomCard();
    navigation.replace("player-card");
  }

  return (
    <SafeAreaView style={styles.titleContainer}>
      <StatusBar style="dark" />
      <View style={styles.card}>
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
          <MaterialIcons name="touch-app" size={30} color="#000" />
          <Text style={{ color: "#0000005d" }}>{counter} cards left</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    height: "100%",
    gap: 16,
    flex: 1,
    backgroundColor: "#3b8d359e",
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
