import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

export function BackgroundDecor() {
    return (
        <>
            <View style={styles.blobTop} />
            <View style={styles.blobBottom} />
            <View style={styles.blobMid} />
        </>
    );
}

const styles = StyleSheet.create({
    blobTop: {
        position: "absolute",
        width: 320,
        height: 320,
        borderRadius: 160,
        backgroundColor: Colors.cyan,
        opacity: 0.07,
        top: -100,
        right: -80,
    },
    blobBottom: {
        position: "absolute",
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: Colors.steel,
        opacity: 0.12,
        bottom: -60,
        left: -60,
    },
    blobMid: {
        position: "absolute",
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: Colors.cyan,
        opacity: 0.05,
        top: "45%",
        left: -40,
    },
});