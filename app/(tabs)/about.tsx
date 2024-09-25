import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/46631807" }}
        style={styles.profileImage}
      />
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={styles.title}>Elvin Shahsuvarli</Text>
        <Text style={styles.subtitle}>Software Developer</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Link href="https://github.com/shahsuvarli" style={styles.iconRow}>
          <AntDesign name="github" size={30} color="#000" style={styles.icon} />
        </Link>

        <Link href={"https://linkedin.com/in/shahsuvarli"}>
          <AntDesign
            name="linkedin-square"
            size={30}
            color="#0077B5"
            style={styles.icon}
          />
        </Link>

        <Link href="mailto:shahsuvarli.elvin@gmail.com">
          <AntDesign
            name="mail"
            size={30}
            color="#D44638"
            style={styles.icon}
          />
        </Link>
      </View>

      <Link href="https://shahsuvarli.com">
        <View style={styles.iconRow}>
          <AntDesign name="link" size={25} color="#000" style={styles.icon} />
          <Text style={styles.infoText}>shahsuvarli.com</Text>
        </View>
      </Link>

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
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#777",
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
    color: "#333",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  aboutText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default AboutPage;
