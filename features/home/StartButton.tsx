import { Colors } from "@/constants/Colors";
import { useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, Text } from "react-native";

interface StartButtonProps {
    onPress: () => void;
}

export function StartButton({ onPress }: StartButtonProps) {
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () =>
        Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();

    const handlePressOut = () =>
        Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();

    return (
        <Animated.View style={[styles.wrapper, { transform: [{ scale }] }]}>
            <Pressable
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={styles.button}
            >
                <Image
                    source={require("../../assets/images/play-button.png")}
                    style={styles.icon}
                />
                <Text style={styles.label}>Start Game</Text>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.cyan,
        shadowColor: Colors.cyan,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 12,
    },
    icon: {
        width: 22,
        height: 22,
        tintColor: Colors.bg,
    },
    label: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.bg,
        letterSpacing: 2,
    },
});