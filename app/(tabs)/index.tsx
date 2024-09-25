import { Colors } from "@/constants/Colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

export default function HomeScreen() {
  const router = useNavigation<any>();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView style={styles.titleContainer}>
        <Pressable style={styles.card} onPress={() => router.replace("mafia")}>
          <Text style={styles.cardText}>Mafia</Text>
          <FontAwesome6 name="gun" size={23} color={Colors.lightPrimary} />
        </Pressable>
      </ScrollView>
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
    backgroundColor: Colors.mafiaLight,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderColor: Colors.lightPrimary,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 24,
    opacity: 0.8,
    color: Colors.primary,
  },
});
