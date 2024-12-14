import React, { useCallback, useRef, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";



const Transactions = ({  }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["47%", "90%"];
  const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  function outsidePress() {}

  const handleOutsidePress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0); // Reduce to 25%
  }, []);
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleListPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1); // Expand to 90%
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <Pressable onPress={handleListPress} style={styles.listItem}>
        <Text onPress={handleSheetChange} key={item}>
          {item}
        </Text>
      </Pressable>
    ),
    []
  );

  return (
    <>
      <Pressable style={StyleSheet.absoluteFill} onPress={handleOutsidePress}>
        <Text style={styles.text}>Tap outside the list to collapse</Text>
      </Pressable>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        onChange={(index) => console.log("Sheet index changed to:", index)}
        style={styles.bottomsheet}
      >
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default Transactions;
