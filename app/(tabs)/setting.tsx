import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is setting screen</Text>
      <Link href="/modal" style={styles.button}>
        Go to Model screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    paddingTop: 20,
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
