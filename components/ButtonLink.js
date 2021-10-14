import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, TouchableHighlight } from "react-native";

const ButtonLink = ({ text, target, style, param }) => {
  const navigation = useNavigation();

  const styles = {
    button: {
      borderRadius:
        Math.round(
          Dimensions.get("window").width + Dimensions.get("window").height
        ) / 2,
      width: Dimensions.get("window").width * 0.5,
      height: Dimensions.get("window").width * 0.5,
      margin: Dimensions.get("window").height / 20,
      backgroundColor: "#f00",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <View style={{}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("button pushed");
          if (!target) {
            target = "Main";
          }
          navigation.navigate(target, param);
        }}
      >
        <Text style={{}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLink;
