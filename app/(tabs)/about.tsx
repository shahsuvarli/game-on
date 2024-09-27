import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/46631807" }}
          style={styles.profileImage}
        />
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={styles.title}>Elvin Shahsuvarli</Text>
        <Text style={styles.subtitle}>Software Developer</Text>
      </View>

      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: "#ffffff69",
          width: "80%",
        }}
      />

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Link href="https://github.com/shahsuvarli" style={styles.iconRow}>
          <AntDesign name="github" size={30} color="#fff" style={styles.icon} />
        </Link>

        <Link href={"https://linkedin.com/in/shahsuvarli"}>
          <AntDesign
            name="linkedin-square"
            size={30}
            color="#fff"
            style={styles.icon}
          />
        </Link>

        <Link href="mailto:shahsuvarli.elvin@gmail.com">
          <AntDesign name="mail" size={30} color="#fff" style={styles.icon} />
        </Link>
      </View>

      <Link href="https://shahsuvarli.com">
        <View style={styles.iconRow}>
          <Text style={styles.infoText}>shahsuvarli.com</Text>
        </View>
      </Link>

      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: "#ffffff69",
          width: "80%",
        }}
      />

      <View>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          I am a software developer, specializing in web and mobile development.
          I enjoy solving complex problems, building innovative products, and
          leading teams to success.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    flexDirection: "column",
    gap: 17,
    backgroundColor: Colors.lightPrimary,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ffffff89",
    borderRadius: 100,
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
    backgroundColor: Colors.primary,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ffffff90",
    opacity: 0.9,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    color: "#ffffffa5",
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: "#fff",
  },
  aboutText: {
    fontSize: 16,
    color: "#ffffffa5",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default AboutPage;
