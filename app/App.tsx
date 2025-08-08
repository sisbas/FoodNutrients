import React from "react";
import { SafeAreaView } from "react-native";
import { SearchScreen } from "./src/screens/SearchScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchScreen />
    </SafeAreaView>
  );
}
