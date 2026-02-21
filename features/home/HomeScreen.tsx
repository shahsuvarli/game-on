import { useNavigation } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackgroundDecor } from "./BackgroundDecor";
import { HeroText } from "./HeroText";
import { LogoAvatar } from "./LogoAvatar";
import { StartButton } from "./StartButton";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
    const router = useNavigation<any>();
    const year = new Date().getFullYear();

    const contentAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(contentAnim, {
            toValue: 1,
            duration: 800,
            delay: 400,
            useNativeDriver: true,
        }).start();
    }, []);

    const contentOpacity = contentAnim;
    const contentTranslate = contentAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [24, 0],
    });

    return (
        <SafeAreaView style={styles.root}>
            <BackgroundDecor />

            <View style={styles.container}>
                <LogoAvatar />

                <HeroText opacity={contentOpacity} translateY={contentTranslate} />

                <Animated.View
                    style={[
                        styles.bottomSection,
                        { opacity: contentOpacity, transform: [{ translateY: contentTranslate }] },
                    ]}
                >
                    <StartButton onPress={() => router.navigate("mafia")} />
                </Animated.View>
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
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 28,
    },
    bottomSection: {
        width: "100%",
        alignItems: "center",
        gap: 16,
    },
    footer: {
        fontSize: 12,
        color: Colors.muted,
        letterSpacing: 1,
    },
});