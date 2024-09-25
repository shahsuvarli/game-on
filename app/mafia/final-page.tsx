import { useMafiaStore } from "@/store/context";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";

export default function FinalPage() {
  const people: any = useMafiaStore((state) => state.people);
  const openCard = useMafiaStore((state) => state.openCard);
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.getParent()?.setOptions({ gestureEnabled: false });
    return () => {
      navigation.getParent()?.setOptions({ gestureEnabled: true });
    };
  }, []);

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
      <View style={{ flexDirection: "column", gap: 10 }}>
        <Text style={{ fontSize: 20, color: "#0000007c" }}>
          List of players!
        </Text>
        <Text style={{ fontSize: 15, color: "#00000046" }}>
          Touch on the player to see their role
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 4,
          width: "100%",
        }}
      >
        {people.map((person: any): any => {
          return (
            <Pressable
              key={person.id}
              style={{
                padding: 16,
                borderRadius: 8,
                backgroundColor: person.open ? "#00000098" : "#000",
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
      </ScrollView>
    </View>
  );
}
