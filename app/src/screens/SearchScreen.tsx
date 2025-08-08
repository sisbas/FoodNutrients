import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import { api } from "../api/client";

export function SearchScreen() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState<any[]>([]);

  async function onSearch() {
    const res = await api.get("/search", { params: { q, lang: "tr" } });
    setItems(res.data.items);
  }

  return (
    <View style={{ padding: 16 }}>
      <TextInput value={q} onChangeText={setQ} placeholder="Besin ara" style={{ borderWidth: 1, padding: 8 }} />
      <Pressable onPress={onSearch} style={{ marginTop: 8 }}><Text>Ara</Text></Pressable>
      <FlatList data={items} keyExtractor={(x) => String(x.fdcId)} renderItem={({ item }) => (
        <Text>{item.name_en}</Text>
      )} />
    </View>
  );
}
