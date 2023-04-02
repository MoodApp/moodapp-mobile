import SQLite from "react-native-sqlite-storage";

export const db =
  SQLite.openDatabase(
    {
      name: "MoodAppDb",
      location: "default",
    },
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database error");
    }
  );


export const initDatabaseTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS " +
        "users " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, score INTEGER);"
    );
  });
};
