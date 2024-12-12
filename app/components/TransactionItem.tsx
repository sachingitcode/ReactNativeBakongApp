import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  date: string;
  name: string;
  amount: string;
};

const TransactionItem = ({ date, name, amount }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    color: "#e74c3c",
  },
});

export default TransactionItem;
