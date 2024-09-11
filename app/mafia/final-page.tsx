import { View, Text, ScrollView } from "react-native";
import people from "../../assets/data/people.json";

export default function FinalPage() {
  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 20, color: "#0000007c" }}>List of players!</Text>
      <ScrollView>
        <View style={{ flexWrap: "wrap", flexDirection: "row", gap: 4 }}>
          {people.map((person): any => {
            return (
              <View
                key={person.id}
                style={{
                  padding: 16,
                  borderRadius: 8,
                  backgroundColor: "#000",
                  width: "100%",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 17 }}>
                  {person.name}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
