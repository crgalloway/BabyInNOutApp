import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import ButtonLink from "./components/ButtonLink";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MainScreen,
  NewEntryMenuScreen,
  FeedEntryScreen,
  NapEntryScreen,
} from "./Screens/Screens.Module";

var display = [{ type: "Dummy", id: "asdf" }];

const Stack = createStackNavigator();

// var getData = ({ setDisplay, setLoaded }) => {
//   var apiURL = "http://localhost:8000/api/feed";
//   fetch(apiURL, { method: "GET" })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       setLoaded(true);
//       display = [];
//       display = data;

//       // setDisplay(data);
//     });
// };

export default function App() {
  //   var apiURL = "http://localhost:8000/api/feed";
  const [loaded, setLoaded] = useState(false);
  // const [display, setDisplay] = useState([]);
  //   const [state, setState] = useState("start");

  //   console.log("loaded", loaded);

  // if (!loaded) {
  //   getData({ setDisplay, setLoaded });
  // }

  useEffect(() => {
    var apiURL = "http://localhost:8000/api/feed";
    if (!loaded) {
      fetch(apiURL, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          console.log("data");

          // display = [];
          // display = display.concat(data);
          console.log(display);
          setLoaded(true);
          // setDisplay(data);
        });
    }
  });

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
  // console.log("Rendered");
  return (
    <NavigationContainer>
      {/* {display.map((item) => {
        return <Text key={item.id + "testing"}>FOO {item.type}</Text>;
      })} */}
      <Stack.Navigator
        initialRouteName="Main"
        options={{ title: "Overview" }}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="NewEntryMenu" component={NewEntryMenuScreen} />
        <Stack.Screen name="FeedEntry" component={FeedEntryScreen} />
        <Stack.Screen name="NapEntry" component={NapEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
