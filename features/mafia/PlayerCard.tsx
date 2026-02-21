import { Colors } from "@/constants/Colors";
import { useMafiaStore } from "@/store/context";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PlayerCard({ player }: any) {
    const decrPlayer = useMafiaStore((state) => state.decrPlayer);
    const incrPlayer = useMafiaStore((state) => state.incrPlayer);

    const hasCount = typeof player.count === "number";
    const canEdit = player.minRequired !== player.maxRequired;

    const canDecr =
        hasCount && canEdit && player.count > player.minRequired;

    const canIncr =
        hasCount && canEdit && player.count < player.maxRequired;

    const cardDisabled = !hasCount;

    return (
        <View style={[styles.card, cardDisabled && styles.cardDisabled]}>
            {/* Left: Role + rules */}
            <View style={styles.left}>
                <View style={styles.rolePill}>
                    <Text style={styles.roleText}>{String(player.role).toUpperCase()}</Text>
                </View>

                <Text style={styles.subText}>
                    Min {player.minRequired} • Max {player.maxRequired}
                </Text>
            </View>

            {/* Right: Controls */}
            <View style={styles.controls}>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Decrease ${player.role}`}
                    disabled={!canDecr}
                    onPress={() => decrPlayer(player.id)}
                    hitSlop={10}
                    style={({ pressed }) => [
                        styles.iconButton,
                        !canDecr && styles.iconButtonDisabled,
                        pressed && canDecr && styles.iconButtonPressed,
                    ]}
                >
                    <AntDesign
                        name="minus"
                        size={18}
                        color={canDecr ? Colors.white : Colors.steel}
                    />
                </Pressable>

                <View style={styles.countPill}>
                    <Text style={styles.countText}>{player.count}</Text>
                </View>

                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Increase ${player.role}`}
                    disabled={!canIncr}
                    onPress={() => incrPlayer(player.id)}
                    hitSlop={10}
                    style={({ pressed }) => [
                        styles.iconButton,
                        !canIncr && styles.iconButtonDisabled,
                        pressed && canIncr && styles.iconButtonPressed,
                    ]}
                >
                    <AntDesign
                        name="plus"
                        size={18}
                        color={canIncr ? Colors.white : Colors.steel}
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#5471ab6c",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        paddingVertical: 12,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        // “Card lift”
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.18,
        shadowRadius: 18,
        elevation: 6,
    },
    cardDisabled: {
        opacity: 0.45,
    },

    left: {
        flex: 1,
        gap: 6,
        paddingRight: 10,
    },

    rolePill: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.08)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.10)",
    },
    roleText: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: "800",
        letterSpacing: 1,
    },
    subText: {
        color: Colors.muted,
        fontSize: 12,
        letterSpacing: 0.2,
    },

    controls: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.cyan,
        alignItems: "center",
        justifyContent: "center",

        shadowColor: Colors.cyan,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.28,
        shadowRadius: 14,
        elevation: 6,
    },
    iconButtonPressed: {
        transform: [{ scale: 0.96 }],
        opacity: 0.92,
    },
    iconButtonDisabled: {
        backgroundColor: "rgba(255,255,255,0.06)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.10)",
        shadowOpacity: 0,
        elevation: 0,
    },

    countPill: {
        minWidth: 52,
        paddingHorizontal: 10,
        height: 44,
        borderRadius: 14,
        backgroundColor: "rgba(0,0,0,0.22)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.10)",
        alignItems: "center",
        justifyContent: "center",
    },
    countText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: "900",
        letterSpacing: 0.2,
    },
});