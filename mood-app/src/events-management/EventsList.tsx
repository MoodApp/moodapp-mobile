import { Button, ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { Event } from "./interfaces/event.interface";
import EventItem from "./components/EventItem";
import { useEffect } from "react";
//import { db } from "../db/database";
import SQLite from "react-native-sqlite-storage";
import { db } from "../db/database";

const newEvent = {
  title: "Hola mundo",
  description: "Soy un evento",
  score: 5,
};

const EventsList = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const getEvents = () => {
    const events: Event[] = [];
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM users", [], (tx, results) => {
        const rows = results.rows;
        for (let i = 0; i < rows.length; i++) {
          events.push(rows.item(i));
        }
        setEvents(events);
      });
    });
  };

  const addEvent = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO users (title, description, score) VALUES (?, ?, ?)`,
        [newEvent.title, newEvent.description, newEvent.score],
        (tx, results) => {
          const newId = results.insertId;
          setEvents([...events, { ...newEvent, id: newId }]);
        }
      );
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <ScrollView>
      <View>
        {events.map((event, index) => {
          return <EventItem item={event} key={index.toString()} />;
        })}
        <Button
          onPress={() => {
            addEvent();
          }}
          title="Añadir"
        />
        <Button
          onPress={() => {
            getEvents();
          }}
          title="Obtener"
        />
      </View>
    </ScrollView>
  );
};

export default EventsList;
