import React from "react";
import { View } from "react-native";
import ButtonLink from "../../components/ButtonLink";
import styles from "../../Base.StyleSheet";

const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <ButtonLink text="Read Log" target="Log" />
      <ButtonLink text="New Entry" target="NewEntryMenu" />
    </View>
  );
};

export default MainScreen;
