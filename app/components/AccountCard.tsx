import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  type: string;
  balance: string;
  imgSource: ImageSource;
}; // type Props = { type: string; balance: string; image: Image };

const AccountCard = ({ type, balance, imgSource }: Props) => {
  return (
    // <Image source={imgSource} style={styles.image} />
    <ImageBackground source={imgSource} style={styles.card}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.balance}>{balance}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 8,
    justifyContent: "center",
    padding: 16,
  },
  type: { fontSize: 16, color: "#fff", fontWeight: "bold", marginBottom: 4 },
  balance: { fontSize: 16, color: "#fff", fontWeight: "bold", marginBottom: 4 },
});

export default AccountCard;
