import { useMafiaStore } from "@/store/context";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

export default function PlayerCard() {
  const navigation = useNavigation<any>();
  const [name, setName] = useState("");
  const counter = useMafiaStore((state) => state.counter);
  const selectedCard: any = useMafiaStore((state) => state.selectedCard);
  const assignName = useMafiaStore((state) => state.assignName);

  function updateName(text: string) {
    setName(text);
  }
  function submit() {
    assignName(selectedCard.id, name);
    if (counter) {
      navigation.replace("game-start");
    } else {
      navigation.replace("final-page");
    }
  }

  return (
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={{
        padding: 16,
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 16,
        }}
      >
        <Image
          source={selectedCard.image}
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
          {selectedCard.role}
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
            fontSize: 19,
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
    </KeyboardAvoidingView>
  );
}
