import { useNavigation } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useNavigation<any>();
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Pressable
          style={styles.card}
          onPress={() => router.navigate("mafia")}
        >
          <Text style={styles.cardText}>Mafia</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    // alignItems: "center",
    // gap: 8,
    height: "100%",
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: "skyblue",
    padding: 16,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 24,
    opacity: 0.8,
  },
});
