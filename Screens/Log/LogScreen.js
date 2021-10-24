import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ButtonLink from "../../components/ButtonLink";
import styles from "../../Base.StyleSheet";

var display = [{ type: "Dummy", id: "asdf" }];

const LogScreen = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    var apiURL = "http://localhost:8000/api/get-all/1"; //Hard-coding until there's more than 1 baby
    if (!loaded) {
      fetch(apiURL, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          console.log("data");

          // display = [];
          // display = display.concat(data);
          console.log(data);
          display = data;
          setLoaded(true);
          // setDisplay(data);
        });
    }
  });

  return (
    <View style={styles.container}>
      <ButtonLink text="close" />
      {display.map((item) => {
        return <Text key={item.id}>FOO {item.type}</Text>;
      })}
    </View>
  );
};

export default LogScreen;
