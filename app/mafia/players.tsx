import { Pressable, ScrollView, Text, View } from "react-native";
import PlayerCard from "@/components/Players/PlayerCard";
import { useMafiaStore } from "@/store/context";
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";

export default function Players() {
  const players = useMafiaStore((state) => state.players);
  const count = useMafiaStore((state) => state.count);
  const navigation = useNavigation<any>();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sumOfCounts = players.reduce(
      (acc: number, player: any) => acc + player.count,
      0
    );
    setTotal(sumOfCounts);
  }, [count, players]);

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
          // backgroundColor: "#978e8e",
          padding: 16,
          // paddingBottom: 100,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="cards" size={24} color="#fff" />

        <Text
          style={{
            fontSize: 20,
            color: total > count ? "#f00" : "#000",
            textAlign: "right",
          }}
        >
          {total} / {count}
        </Text>
      </View>

      <Pressable
        disabled={total !== count}
        style={{
          padding: 16,
          backgroundColor: total !== count ? "#0000002b" : "#000",
          // margin: 10,
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
