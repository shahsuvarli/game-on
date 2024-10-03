import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useNavigation<any>();

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: Colors.mafiaLight,
          borderRadius: 20,
          margin: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("../../assets/images/icon.png")}
          style={{
            width: 200,
            height: 200,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: Colors.mafiaPrimary,
          }}
        />
        <Text
          style={{ fontSize: 27, color: Colors.primary, fontWeight: "bold" }}
        >
          Mafia
        </Text>
        <Text style={{ fontSize: 20, color: "#0000006f", textAlign: "center" }}>
          Trust no one, suspect everyone!
        </Text>
        <Text style={{ fontSize: 15, color: "#0000006f", textAlign: "center" }}>
          The Mafia Game is a social deduction party game that challenges
          players to use strategy, deception, and persuasion to win.
        </Text>
        <Pressable
          onPress={() => router.navigate("mafia")}
          style={{
            padding: 10,
            borderRadius: 20,
            backgroundColor: Colors.primary,
            // width: 150,
            height: 70,
            justifyContent: "space-evenly",
            alignItems: "center",
            borderStyle: "solid",
            borderColor: Colors.primary,
            borderWidth: 1,
            paddingHorizontal: 20,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>Start Game</Text>
          <Image
            source={require("../../assets/images/play-button.png")}
            style={{
              width: 40,
              height: 40,
              tintColor: "#fff",
            }}
          />
        </Pressable>
        <Text style={{ fontSize: 17, color: "#0000006f", textAlign: "center" }}>
          2024 © Mafia
        </Text>
      </View>
    </SafeAreaView>
  );
}
