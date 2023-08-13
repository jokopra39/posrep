import { Button, View, StyleSheet, Text } from "react-native";
import * as React from "react";

export default function HomeScreen({ navigation }) {
  //export default HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to isme"
        onPress={() => navigation.navigate("isme", { name: "Jane" })}
      />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
