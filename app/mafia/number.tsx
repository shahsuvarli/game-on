import { useMafiaStore } from "@/store/context";
import { router, useNavigation } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function MafiaScreen() {
  const count = useMafiaStore((state) => state.count);
  const updateCount = useMafiaStore((state) => state.updateCount);
  const [text, setText] = useState(count.toString());
  const navigation = useNavigation<any>();

  const updateValue = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setText(numericValue);
    updateCount(numericValue);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 16,
          // backgroundColor: "red",
          flexDirection: "column",
          gap: 20,
          // padding: 16,
          justifyContent: "center",
          // alignItems: "center",
          // flex: 1,
          height: "100%",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 20, color: "#000000bc" }}>
          Please enter number of players
        </Text>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            // borderWidth: 1,
            // borderStyle: "solid",
            // borderColor: "#0000005f",
            // margin: 10,
            borderRadius: 8,
          }}
        >
          <TextInput
            keyboardType="numeric"
            placeholder="Min 3 players"
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 4,
              height: 60,
              borderColor: "#00000054",
              borderWidth: 1,
              fontSize: 24,
            }}
            value={text}
            onChangeText={updateValue}
          />
          <Text style={{ fontSize: 16, color: "#000000b0" }}>
            min 3 players
          </Text>
        </View>
        <Pressable
          disabled={count < 3}
          style={{
            padding: 16,
            backgroundColor: "#000",
            borderRadius: 8,
          }}
          onPress={() => navigation.replace("players")}
        >
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
