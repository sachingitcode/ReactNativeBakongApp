import { Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function RootLayout() {
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
      {/* This is global details, If header is on ,then it is visible everywhere  */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false,
           headerTitle: "Global Header" }}
      />
      <Stack.Screen name="+not-found" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerTitle: "Model Header",
        }}
      />
    </Stack>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
