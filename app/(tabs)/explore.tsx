import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
        Explore
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
