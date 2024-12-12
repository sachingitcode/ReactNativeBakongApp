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

const App1 = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Snap points for the BottomSheet
  const snapPoints = ["25%", "90%"];

  // List data
  const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  // Handlers
  const handleListPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1); // Expand to 90%
  }, []);

  const handleOutsidePress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0); // Reduce to 25%
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // Render Item
  // const renderItem = useCallback(
  //   ({ item }: { item: string }) => (
  //     <Pressable onPress={handleListPress} style={styles.listItem}>
  //       <Text>{item}</Text>
  //     </Pressable>
  //   ),
  //   []
  // );

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
    <GestureHandlerRootView style={styles.container}>
      <Pressable style={StyleSheet.absoluteFill} onPress={handleOutsidePress}>
        <Text style={styles.text}>Tap outside the list to collapse</Text>
      </Pressable>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        onChange={(index) => console.log("Sheet index changed to:", index)}
      >
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </BottomSheet>
    </GestureHandlerRootView>
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
});

export default App1;
