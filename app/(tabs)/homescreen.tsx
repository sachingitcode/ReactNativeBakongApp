import React, { useState, useCallback, useRef, useMemo } from "react";

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ImageBackground,
  Modal,
  ScrollView,
  LayoutChangeEvent,
  Pressable,
} from "react-native";
import AccountCard from "@/app/components/AccountCard";
import ActionButtons from "@/app/components/ActionButtons";
import TransactionItem from "@/app/components/TransactionItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import App1 from "./testing";
import Transactions from "../components/Transactions";

const HomeScreen = () => {
  // const bottomSheetRef = useRef<BottomSheet>(null);
  // const snapPoints = ["47%", "90%"];
  // const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  // const handleSheetChange = useCallback((index) => {
  //   console.log("handleSheetChange", index);
  // }, []);
  // const handleListPress = useCallback(() => {
  //   bottomSheetRef.current?.snapToIndex(1); // Expand to 90%
  // }, []);
  // const handleOutsidePress = useCallback(() => {
  //   bottomSheetRef.current?.snapToIndex(0); // Reduce to 25%
  // }, []);
  // const handleClosePress = useCallback(() => {
  //   bottomSheetRef.current?.close();
  // }, []);
  // const renderItem = useCallback(
  //   ({ item }) => (
  //     <Pressable onPress={handleListPress} style={styles.listItem}>
  //       <Text onPress={handleSheetChange} key={item}>
  //         {item}
  //       </Text>
  //     </Pressable>
  //   ),
  //   []
  // );

  const handleOutsidePress = useCallback(() => {
    this.bottomSheetRef.current?.snapToIndex(0); // Reduce to 25%
  }, []);

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
        <GestureHandlerRootView style={styles.sheet_container}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={handleOutsidePress}
          >
            <AccountCard
              type="Riel"
              balance="៛25000.10"
              imgSource={BeachImage}
            />
            <AccountCard
              type="Dollar"
              balance="$1900.84"
              imgSource={TempleImage}
            />
            <ActionButtons />
          </Pressable>

          <Transactions />

          {/* <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            onChange={(index) => console.log("Sheet index changed to:", index)}
            style={styles.bottomsheet}
          >
            <Text style={styles.sectionTitle}> Transactions</Text>
            <BottomSheetFlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.listContainer}
            />
          </BottomSheet> */}
        </GestureHandlerRootView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
  sheet_container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  bottomsheet: {
    borderCurve: "circular",
    borderWidth: 0.5,
    borderRadius: 10,
    borderBlockColor: "grey",
  },
});

export default HomeScreen;

{
  /* <ScrollView
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
        /> */
}
{
  /* <FlatList
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
        /> */
}
