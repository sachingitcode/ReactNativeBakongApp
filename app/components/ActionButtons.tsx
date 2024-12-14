import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ActionButtons = () => {
  const actions = [
    { name: "Send", icon: "send" },
    { name: "Receive", icon: "call-received" },
    { name: "QR Pay", icon: "qr-code" },
    { name: "Deposit", icon: "account-balance-wallet" },
  ];

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        {actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <MaterialIcons name={action.icon} size={24} color="#007bff" />
            <Text style={styles.label}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    height: 100,

    backgroundColor: "#e9ecf2",
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    borderWidth: 0.5,
    borderBlockColor: "grey",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
  button: {
    alignItems: "center",
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: "#007bff",
  },
});

export default ActionButtons;
