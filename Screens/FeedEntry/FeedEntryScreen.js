import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Button,
} from "react-native";
import ButtonLink from "../../components/ButtonLink";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Base.StyleSheet";
import moment from "moment";
import RadioForm from "react-native-simple-radio-button";
import DateTimePickerModal from "react-native-modal-datetime-picker";

var newFeedEvent = {
  time: moment(),
  quantity: 0,
  type: "formula",
  comment: "",
};

const FeedEntryScreen = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigate = useNavigation().navigate;

  var radio_props = [
    { label: "Formula", value: "Formula" },
    { label: "Milk", value: "Milk" },
    { label: "Other", value: "Other" },
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    newFeedEvent.time = moment(date);
    hideDatePicker();
  };

  const submitEvent = function (eventData) {
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
      console.error(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text>Baby was fed at or around:</Text>
        <Text>{newFeedEvent.time.format("M/DD h:mm a").toString()}</Text>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <TextInput
          placeholder="Amount in oz."
          style={styles.TextInputStyle}
          keyboardType={"numeric"}
          onChangeText={(value) => {
            newFeedEvent.quantity = parseFloat(value);
          }}
        />
        <Text>oz.</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {
            newFeedEvent.type = value;
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
            submitEvent(newFeedEvent);
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
