import { Colors } from "@/constants/Colors";
import { View, Text, Image } from "react-native";

const PlayerCardTop = ({ card }: any) => {
  return (
    <View
      style={{
        width: "100%",
        padding: 16,
        // backgroundColor: Colors.primary,
        opacity: 0.9,
      }}
    >
      <Image
        source={card.image}
        style={{
          width: "100%",
          height: 300,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          backgroundColor: Colors.mafiaLight,
          borderBottomLeftRadius: 4,
          // height: 50,
          borderBottomRightRadius: 4,
          paddingVertical: 20,
          paddingHorizontal: 16,
          justifyContent: "center",
          gap: 8,
          borderStyle: "solid",
          borderColor: "#00000061",
          borderWidth: 1,
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "left", color: "#000000d0" }}>
          {card.role}
        </Text>
        <Text style={{ fontSize: 15, color: "#0000009b" }}>
          {card.description}
        </Text>
      </View>
    </View>
  );
};

export default PlayerCardTop;
