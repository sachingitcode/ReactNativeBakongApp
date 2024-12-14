import { SplashScreen, Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Text, Image, StyleSheet, useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" />

      {/* This is global details, If header is on ,then it is visible everywhere  */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, headerTitle: "Global Header" }}
      />
      {/*   ***  */}

      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
