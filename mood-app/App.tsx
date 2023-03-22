import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Login from "./src/auth/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
});
