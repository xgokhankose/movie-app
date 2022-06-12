import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Favorite from "./Favorite";
import Settings from "./Settings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
/* import { View, Text } from "react-native";

 */
const Tab = createBottomTabNavigator();

export default class MainRoot extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Favoruite') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#bd2257',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={31} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen options={{
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={31} />
            ),
          }} name="Favorite" component={Settings} />
        <Tab.Screen options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={31} />
            ),
          }} name="Settings" component={Favorite} />
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
