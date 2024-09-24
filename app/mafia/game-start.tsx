import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function GameStart() {
  const navigation = useNavigation<any>();
  const counter = useMafiaStore((state) => state.counter);
  const randomCard = useMafiaStore((state) => state.randomCard);

  useEffect(() => {
    // console.log(navigation.getParent());
    navigation.getParent()?.setOptions({ gestureEnabled: false });
    return () => {
      navigation.getParent()?.setOptions({ gestureEnabled: true });
    };
  }, []);

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
            borderColor: "#949494",
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
          <MaterialIcons name="touch-app" size={30} color="#949494" />
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
    backgroundColor: Colors.mafiaPrimary,
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
    color: "#949494",
    fontWeight: "bold",
  },
});
