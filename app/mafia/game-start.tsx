import { useMafiaStore } from "@/store/context";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
// const 

export default function GameStart() {
  const navigation = useNavigation<any>();
  const updateCounter = useMafiaStore((state) => state.updateCounter);
  const count = useMafiaStore((state) => state.count);
  const counter = useMafiaStore((state) => state.counter);

  function press() {
    updateCounter();
    navigation.replace("player-card");
  }

  return (
    <LinearGradient style={styles.titleContainer} colors={["#fff", "#ff8c11"]}>
      <View
        style={styles.card}
        // onPress={() => navigation.navigate("game-start")}
      >
        <Pressable
          disabled={count === counter}
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
          <Text style={{ color: "#0000005d" }}>
            {count - counter} cards left
          </Text>
        </Pressable>
      </View>
      {/* <Pressable
        // disabled={!name}
        style={{
          padding: 16,
          backgroundColor: "#000",
          borderRadius: 8,
        }}
        // onPress={submit}
      >
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Submit
        </Text>
      </Pressable> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    // alignItems: "center",
    // gap: 8,
    height: "100%",
    // padding: 16,
    // paddingBottom: 50,
    // flex:1,
    gap: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 17,
    opacity: 0.8,
  },
  card: {
    // backgroundColor: "skyblue",
    // padding: 16,
    borderRadius: 8,
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardText: {
    fontSize: 20,
    opacity: 0.8,
  },
});
