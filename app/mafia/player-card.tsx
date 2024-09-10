import { useMafiaStore } from "@/store/context";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";

export default function PlayerCard() {
  const navigation = useNavigation<any>();
  const [name, setName] = useState("");
  const count = useMafiaStore((state) => state.count);
  const counter = useMafiaStore((state) => state.counter);

  function updateName(text: string) {
    setName(text);
  }
  function submit() {
    if (count === counter) {
      navigation.replace("final-page");
    } else {
      navigation.replace("game-start");
    }
  }

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 16,
        }}
      >
        <Image
          source={require("../../assets/images/don-mafia.jpg")}
          style={{
            width: 300,
            height: 400,
            borderRadius: 20,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Don Mafia
        </Text>
      </View>

      <View style={{ flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {/* <Text style={{ fontSize: 20 }}>Name</Text> */}
        <TextInput
          placeholder="Enter your name"
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#00000046",
            borderRadius: 8,
            height: 50,
            fontSize: 20,
          }}
          placeholderTextColor={"#00000050"}
          value={name}
          onChangeText={updateName}
        />
      </View>
      <Pressable
        disabled={!name}
        style={{
          padding: 16,
          backgroundColor: "#000",
          borderRadius: 8,
        }}
        onPress={submit}
      >
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Submit
        </Text>
      </Pressable>
    </View>
  );
}
