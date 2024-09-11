import { Pressable, ScrollView, Text, View } from "react-native";
import PlayerCard from "@/components/Players/PlayerCard";
import { useMafiaStore } from "@/store/context";
import { useNavigation } from "expo-router";

export default function Players() {
  const players = useMafiaStore((state) => state.players);
  const navigation = useNavigation<any>();
  const counter = useMafiaStore((state) => state.counter);

  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#fff",
        paddingBottom: 30,
        gap: 10,
      }}
    >
      <ScrollView
        style={{
          width: "100%",
          flex: 1,
          marginBottom: 10,
          borderStyle: "solid",
          borderWidth: 2,
          borderColor: "#d7caca5f",
          borderRadius: 8,
          padding: 10,
        }}
        contentContainerStyle={{
          flexDirection: "column",
          gap: 6,
        }}
      >
        {players.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </ScrollView>

      <View
        style={{
          width: "100%",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#000",
            textAlign: "right",
          }}
        >
          {counter} players
        </Text>
      </View>

      <Pressable
        style={{
          padding: 16,
          backgroundColor: "#000",
          borderRadius: 8,
          width: "100%",
          marginBottom: 27,
        }}
        onPress={() => navigation.replace("game-start")}
      >
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Start
        </Text>
      </Pressable>
    </View>
  );
}
