import { Platform, StyleSheet, View, Text } from "react-native";
import { Event } from "../interfaces/event.interface";

const EventItem = ({ item }: EventItemProps) => {
  return (
    <View style={styles.card}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.score}</Text>
    </View>
  );
};

export default EventItem;

interface EventItemProps {
  item: Event;
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#b8b5b5",
    // ...Platform.select({
    //   android: {
    //     elevation: 3,
    //   },
    // }),
  },
});
