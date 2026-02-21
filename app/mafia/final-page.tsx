import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const revealedCount = people.filter((p: any) => p.open).length;

  return (
    <SafeAreaView style={styles.root} edges={["bottom"]}>
      <StatusBar style="light" />

      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Players</Text>
          <Text style={styles.subtitle}>Tap a player to reveal their role</Text>
          <View style={styles.progressRow}>
            <Text style={styles.progressText}>
              {revealedCount} / {people.length} revealed
            </Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${(revealedCount / people.length) * 100}%` },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Player list */}
        <ScrollView
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {people.map((person: any) => (
            <Pressable
              key={person.id}
              onPress={() => openCard(person.id)}
              style={({ pressed }) => [
                styles.playerCard,
                person.open && styles.playerCardOpen,
                pressed && styles.playerCardPressed,
              ]}
            >
              {/* Left: index + name */}
              <View style={styles.playerLeft}>
                <View style={[styles.indexBadge, person.open && styles.indexBadgeOpen]}>
                  <Text style={[styles.indexText, person.open && styles.indexTextOpen]}>
                    {people.indexOf(person) + 1}
                  </Text>
                </View>
                <Text style={[styles.playerName, person.open && styles.playerNameOpen]}>
                  {person.name}
                </Text>
              </View>

              {/* Right: role or lock */}
              <View style={styles.playerRight}>
                {person.open ? (
                  <View style={[styles.roleBadge, { backgroundColor: person.color ?? Colors.cyanDim }]}>
                    <Text style={styles.roleText}>{person.role}</Text>
                  </View>
                ) : (
                  <Ionicons name="lock-closed" size={18} color={Colors.steel} />
                )}
              </View>
            </Pressable>
          ))}
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 16,
  },

  // Header
  header: {
    gap: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: Colors.text,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.muted,
    letterSpacing: 0.3,
  },
  progressRow: {
    marginTop: 6,
    gap: 6,
  },
  progressText: {
    fontSize: 12,
    color: Colors.cyan,
    letterSpacing: 0.5,
    fontWeight: "600",
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.cyanDim,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: Colors.cyan,
    borderRadius: 2,
  },

  // Player cards
  listContent: {
    gap: 8,
    paddingBottom: 32,
  },
  playerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.steel,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  playerCardOpen: {
    borderColor: Colors.cyan,
    backgroundColor: "rgba(78,168,222,0.06)",
  },
  playerCardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  // Left side
  playerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  indexBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.steel,
    alignItems: "center",
    justifyContent: "center",
  },
  indexBadgeOpen: {
    backgroundColor: Colors.cyan,
    borderColor: Colors.cyan,
  },
  indexText: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.muted,
  },
  indexTextOpen: {
    color: Colors.bg,
  },
  playerName: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    letterSpacing: 0.3,
  },
  playerNameOpen: {
    color: Colors.text,
  },

  // Right side
  playerRight: {
    alignItems: "flex-end",
  },
  roleBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  roleText: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.white,
    letterSpacing: 0.5,
  },
});