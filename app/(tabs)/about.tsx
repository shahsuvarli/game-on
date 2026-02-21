import { Colors } from "@/constants/Colors";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SOCIAL_LINKS: { href: string; icon: React.ComponentProps<typeof Entypo>["name"] }[] = [
  { href: "https://github.com/shahsuvarli", icon: "github" },
  { href: "https://linkedin.com/in/shahsuvarli", icon: "linkedin" },
  { href: "mailto:shahsuvarli.elvin@gmail.com", icon: "mail" },
];

const SocialButton = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ComponentProps<typeof Entypo>["name"];
}) => (
  <Link href={href as any}>
    <View style={styles.socialButton}>
      <Entypo name={icon} size={22} color={Colors.cyan} />
    </View>
  </Link>
);

const Divider = () => <View style={styles.divider} />;

export default function AboutPage() {
  return (
    <SafeAreaView style={styles.root} edges={["bottom"]}>
      <View style={styles.container}>

        <View style={styles.avatarRing}>
          <Image
            source={{ uri: "https://avatars.githubusercontent.com/u/46631807" }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.nameBlock}>
          <Text style={styles.name}>Elvin Shahsuvarli</Text>
          <Text style={styles.role}>Software Developer</Text>
        </View>

        <Divider />

        <View style={styles.socialRow}>
          {SOCIAL_LINKS.map((link) => (
            <SocialButton key={link.href} href={link.href} icon={link.icon} />
          ))}
        </View>

        <Link href="https://shahsuvarli.com">
          <View style={styles.websiteChip}>
            <FontAwesome name="globe" size={13} color={Colors.muted} />
            <Text style={styles.websiteText}>shahsuvarli.com</Text>
          </View>
        </Link>

        <Divider />

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
    paddingHorizontal: 28,
    paddingTop: 100,
    gap: 50,
  },

  // Avatar
  avatarRing: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: Colors.cyan,
    padding: 4,
    backgroundColor: Colors.card,
    shadowColor: Colors.cyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 66,
  },

  // Name
  nameBlock: {
    alignItems: "center",
    gap: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.text,
    letterSpacing: 0.5,
  },
  role: {
    fontSize: 14,
    color: Colors.cyan,
    letterSpacing: 1.5,
  },

  // Divider
  divider: {
    width: "70%",
    height: StyleSheet.hairlineWidth,
    // backgroundColor: "#fff",
  },

  // Social
  socialRow: {
    flexDirection: "row",
    gap: 16,
  },
  socialButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.steel,
    alignItems: "center",
    justifyContent: "center",
  },

  // Website
  websiteChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.steel,
    backgroundColor: Colors.card,
  },
  websiteText: {
    fontSize: 14,
    color: Colors.muted,
    letterSpacing: 0.5,
  },
});