import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, TouchableHighlight } from "react-native";

const BackButton = ({ target, style, param }) => {
  const navigation = useNavigation();

  const styles = {
    button: {
      borderRadius: 5,
      width: Dimensions.get("window").width * 0.1,
      height: Dimensions.get("window").width * 0.1,
      margin: Dimensions.get("window").height / 100,
      backgroundColor: "#f0f",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <View style={{}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!target) {
            target = "Main";
          }
          navigation.navigate(target, param);
        }}
      >
        <Text style={{}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
