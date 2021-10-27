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
import BackButton from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Base.StyleSheet";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

var newEvent = {
  startTime: null,
  endTime: null,
  comment: null,
};

const NapEntryScreen = (props) => {
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const navigate = useNavigation().navigate;

  // ---------
  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleStartConfirm = (date) => {
    newEvent.startTime = moment(date);
    hideStartDatePicker();
  };

  // ---------
  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleEndConfirm = (date) => {
    newEvent.endTime = moment(date);
    hideEndDatePicker();
  };

  const submitEvent = function (eventData) {
    var apiURL = "http://localhost:8000/api/nap";
    try {
      fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      }).then((data) => {
        newEvent = {
          startTime: null,
          endTime: null,
          comment: null,
        };
        navigate("Main");
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <BackButton target="NewEntryMenu" />
        <Text>Baby was put down at or around:</Text>
        <Text>
          {newNapEvent.startTime
            ? newEvent.startTime.format("M/DD h:mm a").toString()
            : "?"}
        </Text>
        <Button title="Edit Start Time" onPress={showStartDatePicker} />
        <DateTimePickerModal
          isVisible={isStartDatePickerVisible}
          mode="datetime"
          onConfirm={handleStartConfirm}
          onCancel={hideStartDatePicker}
        />

        <Text>Baby got up at or around:</Text>
        <Text>
          {newNapEvent.endTime
            ? newEvent.endTime.format("M/DD h:mm a").toString()
            : "?"}
        </Text>
        <Button title="Edit End Time" onPress={showEndDatePicker} />
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode="datetime"
          onConfirm={handleEndConfirm}
          onCancel={hideEndDatePicker}
        />

        <TextInput
          placeholder="Comment"
          style={styles.TextInputStyle}
          keyboardType={"default"}
          onChangeText={(value) => {
            newEvent.comment = value;
          }}
        />
        <TouchableOpacity
          onPress={(value) => {
            submitEvent(newNapEvent);
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NapEntryScreen;
