import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

// const HomeScreen = () =>
// export default HomeScreen;

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilesection}></View>

      <Text style={styles.text}>About screen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  profilesection: {},

  profile_pic: {
    width: 20,
  },
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
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
{
  /* <Link href="/" style={styles.button}>
  Go to Index scre
</Link>; */
}
