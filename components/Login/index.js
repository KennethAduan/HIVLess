import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import Home from "../Home";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const name = "123";
    const pass = "123";

    if (username === name && password === pass) {
      console.log(`Username: ${username}, Password: ${password}`);
      console.log("Login successful");
      // Navigate to the home screen
      navigation.navigate("Home");
    } else {
      Alert.alert("Login Error", "Incorrect username or password", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Ionicons name="logo-google" size={20} color="white" />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18181B",
  },
  inputContainer: {
    marginBottom: 20,
  },

  input: {
    height: 40,
    width: 250,
    borderColor: "gray",
    backgroundColor: "#rgb(246,247,246)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: "center",
    color: "#2196F3",
    paddingVertical: 15,
  },
  loginButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DB4437",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  googleButtonText: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
});
