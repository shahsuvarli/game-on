import { characters } from "@/assets/data/characters";
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
          style={{ fontSize: 24, color: Colors.primary, textAlign: "center" }}
        >
          Welcome to the Game!
        </Text>
        <Pressable
          onPress={() => router.navigate("mafia")}
          style={{
            padding: 10,
            borderRadius: 20,
            backgroundColor: Colors.primary,
            width: 200,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "solid",
            borderColor: Colors.primary,
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>Tap to start!</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              position: "relative",
            }}
          >
            {characters.map((character) => (
              <Image
                key={character.id}
                source={character.image}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  opacity: 0.9,
                  position: "static",
                  bottom: 0,
                  right: character.id * 17,
                  borderWidth: 1,
                  borderColor: "#fff",
                }}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
