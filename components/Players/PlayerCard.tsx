import { useMafiaStore } from "@/store/context";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default function PlayerCard({ player }: any) {
  const decrPlayer = useMafiaStore((state) => state.decrPlayer);
  const incrPlayer = useMafiaStore((state) => state.incrPlayer);

  return (
    <View
      style={{
        backgroundColor: "#bababa",
        borderRadius: 8,
        gap: 16,
        flexDirection: "row",
        borderStyle: "solid",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "transparent",
        opacity: player.count ? 1 : 0.5,
        alignItems: "center",
      }}
      key={player.id}
    >
      <Pressable
        onPress={() =>
          player.count &&
          player.minRequired !== player.maxRequired &&
          player.count > player.minRequired
            ? decrPlayer(player.id)
            : null
        }
        style={{ padding: 16 }}
      >
        <AntDesign
          name="minus"
          size={24}
          color={
            player.count &&
            player.minRequired !== player.maxRequired &&
            player.count > player.minRequired
              ? "#000"
              : "transparent"
          }
        />
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, color: "#000000c7" }}>
          {player.count} {player.role.toLowerCase()}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() =>
            // player.count &&
            player.minRequired !== player.maxRequired &&
            player.count < player.maxRequired
              ? incrPlayer(player.id)
              : null
          }
          style={{ padding: 16 }}
        >
          <AntDesign
            name="plus"
            size={24}
            color={
              // player.count &&
              player.minRequired !== player.maxRequired &&
              player.count < player.maxRequired
                ? "#000"
                : "transparent"
            }
          />
        </Pressable>
      </View>
    </View>
  );
}
