import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Login from "./src/auth/Login";
import EventsList from "./src/events-management/EventsList";
import {useEffect} from 'react'
import { initDatabaseTables } from "./src/db/database";

export default function App() {
  
  useEffect(() => {
 
  }, [])

  return (
    <View style={styles.container}>
      <EventsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
});
