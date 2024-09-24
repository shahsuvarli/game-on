import PlayerCardBottom from "@/components/Mafia/player-card-bottom";
import PlayerCardTop from "@/components/Mafia/player-card-top";
import { useMafiaStore } from "@/store/context";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

export default function PlayerCard() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ gestureEnabled: false });
    return () => {
      navigation.getParent()?.setOptions({ gestureEnabled: true });
    };
  }, []);

  const card: any = useMafiaStore((state) => state.selectedCard);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={100}
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <PlayerCardTop card={card} />
        <PlayerCardBottom card={card} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
