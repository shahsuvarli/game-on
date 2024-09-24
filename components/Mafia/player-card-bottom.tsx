import { useMafiaStore } from "@/store/context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

const PlayerCardBottom = ({ card }: any) => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState("");
  const counter = useMafiaStore((state) => state.counter);
  const assignName = useMafiaStore((state) => state.assignName);

  function updateName(text: string) {
    setName(text);
  }
  function submit() {
    assignName(card.id, name);
    if (counter) {
      navigation.replace("game-start");
    } else {
      navigation.replace("final-page");
    }
  }
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 3,
        width: "100%",
        padding: 16,
        alignItems: "flex-end",
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "column", gap: 8, width: "100%" }}>
        <Text style={{ fontSize: 17, color: "#0000006f" }}>Your name</Text>
        <TextInput
          placeholder="Enter your name"
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#00000046",
            borderRadius: 8,
            height: 50,
            fontSize: 17,
            width: "100%",
          }}
          placeholderTextColor={"#00000050"}
          value={name}
          onChangeText={updateName}
          keyboardAppearance="default"
        />

        <Pressable
          disabled={!name}
          style={{
            padding: 8,
            borderRadius: 8,
            // flex: 1,
            height: 50,
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onPress={submit}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
            }}
          >
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PlayerCardBottom;
