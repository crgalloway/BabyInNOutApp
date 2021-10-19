import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import ButtonLink from "../../components/ButtonLink";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Base.StyleSheet";
import moment from "moment";
import RadioForm from "react-native-simple-radio-button";

var radio_props = [
  { label: "Formula", value: "Formula" },
  { label: "Breast Milk", value: "Breast Milk" },
  { label: "Other", value: "Other" },
];

var submitEvent = function (eventData, navigate) {
  var apiURL = "http://localhost:8000/api/feed";
  try {
    fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((data) => {
      navigate("Main");
    });
  } catch (error) {
    console.log(error.message);
  }
};

var newFeedEvent = {
  time: moment(),
  quantity: 0,
  type: "formula",
  comment: "",
};

const FeedEntryScreen = (props) => {
  const navigate = useNavigation().navigate;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text>Baby was fed at or around:</Text>
        <Text>{newFeedEvent.time.format("h:mm a").toString()}</Text>
        <TextInput
          placeholder="Amount in oz."
          style={styles.TextInputStyle}
          keyboardType={"numeric"}
          onChangeText={(value) => {
            newFeedEvent.quantity = parseInt(value, 10);
          }}
        />
        <Text>oz.</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {
            newFeedEvent.type = value;
            console.log(newFeedEvent);
          }}
        />
        <TextInput
          placeholder="Comment"
          style={styles.TextInputStyle}
          keyboardType={"default"}
          onChangeText={(value) => {
            newFeedEvent.comment = value;
          }}
        />
        <TouchableOpacity
          onPress={(value) => {
            console.log(newFeedEvent);
            submitEvent(newFeedEvent, navigate);
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
        <ButtonLink text="Nothing yet" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FeedEntryScreen;
