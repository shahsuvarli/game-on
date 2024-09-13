import { useNavigation } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useNavigation<any>();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <View style={styles.titleContainer}>
        <Pressable style={styles.card} onPress={() => router.navigate("mafia")}>
          <Text style={styles.cardText}>Mafia</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    height: "100%",
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 24,
    opacity: 0.8,
    color: "#fff",
  },
});
