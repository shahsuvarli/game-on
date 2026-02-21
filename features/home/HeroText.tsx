import { Colors } from "@/constants/Colors";
import { Animated, StyleSheet, Text } from "react-native";

interface HeroTextProps {
    opacity: Animated.AnimatedInterpolation<number> | Animated.Value;
    translateY: Animated.AnimatedInterpolation<number> | Animated.Value;
}

export function HeroText({ opacity, translateY }: HeroTextProps) {
    return (
        <Animated.View style={[styles.wrapper, { opacity, transform: [{ translateY }] }]}>
            <Text style={styles.title}>MAFIA</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        gap: 12,
        width: "100%",
    },
    title: {
        fontSize: 60,
        fontWeight: "900",
        color: Colors.white,
        letterSpacing: 14,
        textShadowColor: Colors.cyan,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 24,
    },
});