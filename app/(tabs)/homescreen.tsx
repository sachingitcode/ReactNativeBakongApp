import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ImageBackground,
  Modal,
  ScrollView,
  LayoutChangeEvent,
} from "react-native";
import AccountCard from "@/app/components/AccountCard";
import ActionButtons from "@/app/components/ActionButtons";
import TransactionItem from "@/app/components/TransactionItem";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const BeachImage = require("@/assets/images/beach.jpg");

  const TempleImage = require("@/assets/images/temple.jpeg");
  const backgroundImage = require("@/assets/images/bkgrnd3.avif");
  // Example transaction data
  const [transactions, setTransactions] = useState([
    { id: "1", date: "9/12/24", name: "Sent to Soknal", amount: "-3.01" },
    { id: "2", date: "8/12/24", name: "Received from Alice", amount: "+50.00" },
    { id: "3", date: "7/12/24", name: "Paid for dinner", amount: "-12.00" },
    { id: "4", date: "6/12/24", name: "Transfer from Bank", amount: "+100.00" },
    { id: "5", date: "9/12/24", name: "Received to Soknal", amount: "-13.01" },
    { id: "6", date: "8/12/24", name: "Transfer from Alice", amount: "+50.30" },
    { id: "7", date: "7/12/24", name: "Received for dinner", amount: "-12.30" },
    { id: "8", date: "6/12/24", name: "Send to Bank", amount: "+10.00" },
    { id: "8", date: "8/12/24", name: "Transfer to Ali", amount: "+50.30" },
    { id: "10", date: "7/12/24", name: "Received for Sam", amount: "-12.30" },
    { id: "11", date: "6/12/24", name: "Send to Job", amount: "+10.00" },
  ]);

  const [slideHeight, setSlideHeight] = useState(0);

  const updateHeight = () => (e: LayoutChangeEvent) => {
    setSlideHeight(e.nativeEvent.layout.height);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <AccountCard type="Riel" balance="៛250.10" imgSource={BeachImage} />
        <AccountCard type="Dollar" balance="$100.84" imgSource={TempleImage} />

        {/* Action Buttons */}
        <ActionButtons />

        {/* Transaction List */}

        <Text style={styles.sectionTitle}>Transactions</Text>

        {/* <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem
              date={item.date}
              name={item.name}
              amount={item.amount}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        /> */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}
          onLayout={updateHeight}
        >
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
          <View>
            <Text>1234567</Text>
          </View>
        </ScrollView>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionItem
              date={item.date}
              name={item.name}
              amount={item.amount}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={true}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#333",
  },
  listContent: {
    paddingBottom: 16,
  },
  slide2: {
    justifyContent: "center",
    backgroundColor: "green",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});

export default HomeScreen;
