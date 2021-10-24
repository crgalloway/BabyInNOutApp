import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MainScreen,
  NewEntryMenuScreen,
  FeedEntryScreen,
  NapEntryScreen,
  DiaperEntryScreen,
  LogScreen,
} from "./Screens/Screens.Module";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        options={{ title: "Overview" }}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="NewEntryMenu" component={NewEntryMenuScreen} />
        <Stack.Screen name="FeedEntry" component={FeedEntryScreen} />
        <Stack.Screen name="NapEntry" component={NapEntryScreen} />
        <Stack.Screen name="DiaperEntry" component={DiaperEntryScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
