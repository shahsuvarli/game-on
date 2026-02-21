import { Colors } from "@/constants/Colors";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export function LogoAvatar() {
    const glow = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.85)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
            Animated.spring(scale, { toValue: 1, friction: 7, tension: 60, useNativeDriver: true }),
        ]).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(glow, { toValue: 1, duration: 2000, useNativeDriver: true }),
                Animated.timing(glow, { toValue: 0, duration: 2000, useNativeDriver: true }),
            ])
        ).start();
    }, []);

    const glowOpacity = glow.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0.75] });

    return (
        <Animated.View style={[styles.wrapper, { opacity, transform: [{ scale }] }]}>
            <Animated.View style={[styles.glow, { opacity: glowOpacity }]} />
            <View style={styles.ring}>
                <Image source={require("../../assets/images/icon.png")} style={styles.image} />
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    glow: {
        position: "absolute",
        width: 210,
        height: 210,
        borderRadius: 105,
        backgroundColor: Colors.cyan,
        shadowColor: Colors.cyan,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 20,
    },
    ring: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: Colors.cyan,
        overflow: "hidden",
        backgroundColor: Colors.card,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});