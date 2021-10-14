import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import ButtonLink from "./components/ButtonLink";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MainScreen,
  NewEntryMenuScreen,
  FeedEntryScreen,
} from "./Screens/Screens.Module";

var display = [];

const Stack = createStackNavigator();

// var getData = ({ setLoaded }) => {
//   var apiURL = "http://localhost:8000/api/feed";
//   console.log(moment());
//   fetch(apiURL, { method: "GET" })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(moment(data[0].time).format("dd-m-yy"));
//       console.log(moment());

//       display = [];
//       display = data;
//       setLoaded(true);
//     });
// };

export default function App() {
  //   var apiURL = "http://localhost:8000/api/feed";
  //   const [loaded, setLoaded] = useState(false);
  //   const [state, setState] = useState("start");

  //   console.log("loaded", loaded);

  //   // if (!loaded) {
  //   //   getData({ setLoaded });
  //   // }

  //   getData({ setLoaded });

  //   return (
  //     <View style={styles.container}>
  //       <ButtonLink text="Read Log" />
  //       <ButtonLink text="New Entry" />
  //     </View>
  //   );
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
