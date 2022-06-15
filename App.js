import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainRoot from "./app/pages/MainRoot";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MovieDetail from "./app/pages/MovieDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainRoot"
          component={MainRoot}
          options={{ title: "movie-appx" }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{ title: "MovieDetail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
