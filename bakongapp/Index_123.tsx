import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Button,
} from "react-native";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
const Index123 = () => {
  //  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>();

  const [username, setUsername] = useState<string>("emilys");
  const [email, setEmail] = useState<string>("emilys");
  const [password, setPassword] = useState<string>("emilyspass");

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);
  const signIn = async () => {
    // setLoading(true);
    // try {
    //   await auth().signInWithEmailAndPassword(email, password);
    //   alert("Check email");
    // } catch (error) {
    //   alert("Registeration Failed " + error + ". Please try again");
    // } finally {
    //   setLoading(false);
    // }
  };

  const signUp = async () => {
    // setLoading(true);
    // try {
    //   await auth().createUserWithEmailAndPassword(email, password);
    // } catch (error) {
    //   alert("Registeration Failed " + error + ". Please try again");
    // } finally {
    //   setLoading(false);
    // }
  };

  <View style={styles.subContainer}>
    <Text style={styles.title}>Auth ..... Project</Text>
    <View style={styles.whiteSection}>
      <Text style={styles.subTitle}>Let's get something</Text>

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <Button onPress={signIn} title="SignIn" />
      <Button onPress={signUp} title="SignUP" />

      <TouchableOpacity
        style={styles.button}
        disabled={loading}
        onPress={signIn}
      >
        {loading ? (
          <ActivityIndicator size={"small"} />
        ) : (
          <Text style={styles.textButton}>Sign In</Text>
        )}
      </TouchableOpacity>
    </View>
  </View>;
};

const colors = {
  primary: "#63771E",
  white: "#FFFFFF",
  black: "#000000",
};
const styles = StyleSheet.create({
  header: { flex: 0, backgroundColor: colors.primary },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: { backgroundColor: colors.primary, flex: 1 },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  whiteSection: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  wrapperInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    marginTop: 25,
  },
  input: {
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 25,
    borderRadius: 20,
  },
  textButton: {
    fontWeight: "800",
    color: colors.white,
  },
});

export default Index123;
