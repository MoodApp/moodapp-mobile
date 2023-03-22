import { View, Text, StyleSheet, TextInput, Platform, Button } from "react-native";
const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>

          <Text style={styles.loginText}>Iniciar sesión</Text>

        <TextInput placeholder="Correo" style={styles.textInput} />
        <TextInput placeholder="Contraseña" style={styles.textInput} />
        <View style={styles.buttonContainer}>
            <Button color='red' title="Iniciar sesión"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    textAlign: "center",
    fontSize: 20
  },
  formContainer: {
    borderWidth: 0.5,
    padding: 10,
    borderColor: "#b8b5b5",
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
    width: "70%",
    height: "40%",
    borderRadius: 10,
    backgroundColor: "white",
  },
  textInput: {
    height: 40,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#b8b5b5",
    borderRadius: 5,
    marginTop: 20,
    padding: 8,
    ...Platform.select({
        android: {
          elevation: 3,
        },
      }),
  },
  buttonContainer: {
    marginTop: 20
  }
});

export default Login;
