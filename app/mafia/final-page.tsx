import { useMafiaStore } from "@/store/context";
import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable } from "react-native";

export default function FinalPage() {
  const people: any = useMafiaStore((state) => state.people);
  const openCard = useMafiaStore((state) => state.openCard);
  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <StatusBar style="dark" />
      <Text style={{ fontSize: 20, color: "#0000007c" }}>List of players!</Text>
      <View style={{ flexWrap: "wrap", flexDirection: "row", gap: 4 }}>
        {people.map((person: any): any => {
          return (
            <Pressable
              key={person.id}
              style={{
                padding: 16,
                borderRadius: 8,
                backgroundColor: "#000",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => openCard(person.id)}
            >
              <Text style={{ color: "#fff", fontSize: 17 }}>{person.name}</Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                  display: person.open ? "flex" : "none",
                }}
              >
                {person.role}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
