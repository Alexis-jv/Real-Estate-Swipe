import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ConversationScreen() {
  return (
    <View style={styles.screen}>
      <Text>Conversation screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "blue",
  },
});
