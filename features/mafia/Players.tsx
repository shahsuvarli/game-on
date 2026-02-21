import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import PlayerCard from "./PlayerCard";

export default function Players() {
    const characters = useMafiaStore((state) => state.characters);
    const counter = useMafiaStore((state) => state.counter);
    const generatePeople = useMafiaStore((state) => state.generatePeople);
    const navigation = useNavigation<any>();

    useEffect(() => {
        navigation.getParent()?.setOptions({ gestureEnabled: false });
        return () => navigation.getParent()?.setOptions({ gestureEnabled: true });
    }, [navigation]);

    // You can tighten this rule (e.g., require 5+ players)
    const canStart = counter >= 1;

    function startGame() {
        if (!canStart) return;
        generatePeople();
        navigation.replace("game-start");
    }

    return (
        <View style={styles.root}>
            {/* Header */}
            <View style={styles.header}>

                <View style={styles.statsRow}>
                    <View style={styles.counterPill}>
                        <Text style={styles.counterNumber}>{counter}</Text>
                        <Text style={styles.counterLabel}>players</Text>
                    </View>

                    <View style={styles.hintPill}>
                        <Text style={styles.hintText}>Tap + / − to balance</Text>
                    </View>
                </View>
            </View>

            {/* List */}
            <View style={styles.listCard}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {characters.map((character) => (
                        <PlayerCard player={character} key={character.id} />
                    ))}
                </ScrollView>
            </View>

            {/* Footer CTA */}
            <View style={styles.footer}>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Start Game"
                    disabled={!canStart}
                    onPress={startGame}
                    style={({ pressed }) => [
                        styles.button,
                        !canStart && styles.buttonDisabled,
                        pressed && canStart && styles.buttonPressed,
                    ]}
                >
                    <Text style={styles.buttonText}>Start Game</Text>
                </Pressable>

                {!canStart && (
                    <Text style={styles.footerNote}>Add at least 1 player to continue.</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.bg,
        paddingHorizontal: 16,
        paddingTop: 16,
    },

    header: {
        gap: 6,
        marginBottom: 14,
    },
    title: {
        color: Colors.white,
        fontSize: 28,
        fontWeight: "900",
        letterSpacing: -0.4,
    },
    subtitle: {
        color: Colors.muted,
        fontSize: 13,
        letterSpacing: 0.2,
    },

    statsRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    counterPill: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 12,
        height: 40,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.08)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.10)",
    },
    counterNumber: {
        color: Colors.white,
        fontWeight: "900",
        fontSize: 16,
    },
    counterLabel: {
        color: Colors.muted,
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 0.4,
    },

    hintPill: {
        flex: 1,
        height: 40,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.06)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
    },
    hintText: {
        color: Colors.muted,
        fontSize: 12,
        fontWeight: "600",
    },

    listCard: {
        flex: 1,
        borderRadius: 18,
        backgroundColor: "rgba(255,255,255,0.04)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        padding: 12,
        marginBottom: 14,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 14 },
        shadowOpacity: 0.18,
        shadowRadius: 22,
        elevation: 6,
    },
    scrollContent: {
        gap: 10,
        paddingBottom: 10,
    },

    footer: {
        paddingBottom: 28,
        gap: 8,
    },

    button: {
        backgroundColor: Colors.cyan,
        paddingVertical: 16,
        borderRadius: 18,
        width: "100%",
        alignItems: "center",

        shadowColor: Colors.cyan,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.35,
        shadowRadius: 18,
        elevation: 10,
    },
    buttonPressed: {
        transform: [{ scale: 0.985 }],
        opacity: 0.92,
    },
    buttonDisabled: {
        backgroundColor: "rgba(255,255,255,0.10)",
        shadowOpacity: 0,
        elevation: 0,
    },
    buttonText: {
        color: Colors.bg,
        fontSize: 16,
        fontWeight: "900",
        letterSpacing: 1.6,
    },
    footerNote: {
        color: Colors.muted,
        fontSize: 12,
        textAlign: "center",
    },
});