import React, { useState } from "react";
import { View, Platform } from "react-native";
import ButtonLink from "../../components/ButtonLink";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Base.StyleSheet";

const NewEntryMenuScreen = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const navigate = useNavigation().navigate;

  return (
    <View style={styles.container}>
      <ButtonLink text="New Feeding" target={"FeedEntry"} />
      <ButtonLink text="New Diaper" />
      <ButtonLink text="New Sleep" />
    </View>
  );
};

export default NewEntryMenuScreen;
