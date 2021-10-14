import React, { useState } from "react";
import { View, Platform } from "react-native";
import ButtonLink from "../../components/ButtonLink";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Base.StyleSheet";

const MainScreen = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const navigate = useNavigation().navigate;

  return (
    <View style={styles.container}>
      <ButtonLink text="Read Log" />
      <ButtonLink text="New Entry" target="NewEntryMenu" />
    </View>
  );
};

export default MainScreen;
