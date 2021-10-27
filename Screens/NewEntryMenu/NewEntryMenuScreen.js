import React from "react";
import { View } from "react-native";
import ButtonLink from "../../components/ButtonLink";
import BackButton from "../../components/BackButton";
import styles from "../../Base.StyleSheet";

const NewEntryMenuScreen = (props) => {
  return (
    <View style={styles.container}>
      <BackButton target="Main" />
      <ButtonLink text="New Feeding" target={"FeedEntry"} />
      <ButtonLink text="New Diaper" target={"DiaperEntry"} />
      <ButtonLink text="New Sleep" target={"NapEntry"} />
    </View>
  );
};

export default NewEntryMenuScreen;
