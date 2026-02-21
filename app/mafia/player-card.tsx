import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlayerCard() {
  const navigation = useNavigation<any>();
  const card: any = useMafiaStore((state) => state.selectedCard);
  const counter = useMafiaStore((state) => state.counter);
  const assignName = useMafiaStore((state) => state.assignName);

  const [name, setName] = useState("");

  useEffect(() => {
    navigation.getParent()?.setOptions({ gestureEnabled: false });
    return () => {
      navigation.getParent()?.setOptions({ gestureEnabled: true });
    };
  }, []);

  const trimmedName = name.trim();

  function submit() {
    if (!trimmedName) return;
    assignName(card.id, trimmedName);
    navigation.replace(counter ? "game-start" : "final-page");
  }

  const accentColor = card.color ?? Colors.cyan;

  return (
    <SafeAreaView style={styles.root} edges={["bottom"]}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        {/* Scrollable content above input */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Hero image */}
          <View style={[styles.imageWrapper, { borderColor: accentColor }]}>
            <Image source={card.image} style={styles.image} />
            <View style={[styles.imageBadge, { backgroundColor: accentColor }]}>
              <Text style={styles.badgeText}>{card.role}</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionText}>{card.description}</Text>
          </View>

          {/* Win / Lose */}
          <View style={styles.conditionsRow}>
            <View style={[styles.conditionCard, styles.winCard]}>
              <View style={styles.conditionHeader}>
                <Ionicons name="trophy-outline" size={16} color="#4CAF50" />
                <Text style={[styles.conditionTitle, { color: "#4CAF50" }]}>WIN</Text>
              </View>
              <Text style={styles.conditionText}>{card.win}</Text>
            </View>
            <View style={[styles.conditionCard, styles.loseCard]}>
              <View style={styles.conditionHeader}>
                <Ionicons name="skull-outline" size={16} color="#F44336" />
                <Text style={[styles.conditionTitle, { color: "#F44336" }]}>LOSE</Text>
              </View>
              <Text style={styles.conditionText}>{card.lose}</Text>
            </View>
          </View>
        </ScrollView>

        {/* Input pinned at bottom — always above keyboard */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Your name</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={Colors.muted}
            value={name}
            onChangeText={setName}
            style={styles.input}
            keyboardAppearance="dark"
            autoCorrect={false}
            autoCapitalize="words"
            returnKeyType="done"
            onSubmitEditing={submit}
          />
          <Pressable
            onPress={submit}
            disabled={!trimmedName}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: accentColor },
              !trimmedName && styles.buttonDisabled,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  keyboardView: {
    flex: 1,
  },

  // Scroll
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 14,
    paddingBottom: 8,
  },

  // Hero image
  imageWrapper: {
    borderRadius: 16,
    borderWidth: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  imageBadge: {
    position: "absolute",
    bottom: 12,
    left: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: Colors.white,
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.5,
  },

  // Description
  descriptionCard: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.cyanDim,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 22,
  },

  // Win / Lose
  conditionsRow: {
    flexDirection: "row",
    gap: 10,
  },
  conditionCard: {
    flex: 1,
    borderRadius: 12,
    padding: 14,
    gap: 8,
    borderWidth: 1,
  },
  winCard: {
    backgroundColor: "rgba(76,175,80,0.08)",
    borderColor: "rgba(76,175,80,0.3)",
  },
  loseCard: {
    backgroundColor: "rgba(244,67,54,0.08)",
    borderColor: "rgba(244,67,54,0.3)",
  },
  conditionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  conditionTitle: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  conditionText: {
    fontSize: 12,
    color: Colors.muted,
    lineHeight: 18,
  },

  // Input — pinned outside ScrollView
  inputSection: {
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.cyanDim,
    backgroundColor: Colors.bg,
  },
  inputLabel: {
    fontSize: 13,
    color: Colors.muted,
    letterSpacing: 0.5,
  },
  input: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.steel,
    backgroundColor: Colors.card,
    paddingHorizontal: 14,
    fontSize: 16,
    color: Colors.text,
  },
  button: {
    height: 54,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: Colors.steel,
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: 2,
  },
});