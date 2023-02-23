import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/Login";
import HomeScreen from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: "Login",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#008080",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Home",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#008080",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    // <LoginScreen/>
    //  <HomeScreen/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TitleDesign: {},
});
