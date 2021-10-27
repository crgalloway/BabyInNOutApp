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
  time: moment(),
};

const DiaperEntryScreen = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [urineAmount, setUrineAmount] = useState();
  const [stoolAmount, setStoolAmount] = useState();
  const navigate = useNavigation().navigate;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    newEvent.time = moment(date);
    hideDatePicker();
  };

  const submitEvent = function (eventData) {
    var apiURL = "http://localhost:8000/api/diaper";
    try {
      fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      }).then((data) => {
        newEvent = {
          urineAmount: null,
          stoolAmount: null,
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
        <Text>Diaper was changed at or around:</Text>
        <Text>{newEvent.time.format("M/DD h:mm a").toString()}</Text>
        <Button title="Edit Time" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <TouchableOpacity
          onPress={() => {
            if (urineAmount && urineAmount.length < 5) {
              setUrineAmount(urineAmount + "X");
            } else if (!urineAmount) {
              setUrineAmount("X");
            }
            newEvent.urineAmount = urineAmount;
          }}
        >
          <Text>Urine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (urineAmount && urineAmount.length > 1) {
              setUrineAmount(urineAmount.substr(0, urineAmount.length - 1));
            } else if (urineAmount && urineAmount.length === 1) {
              setUrineAmount();
            }
            newEvent.urineAmount = urineAmount;
          }}
        >
          <Text>{urineAmount}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (stoolAmount && stoolAmount.length < 5) {
              setStoolAmount(stoolAmount + "X");
            } else if (!stoolAmount) {
              setStoolAmount("X");
            }
            newEvent.stoolAmount = stoolAmount;
          }}
        >
          <Text>Stool</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (stoolAmount && stoolAmount.length > 1) {
              setStoolAmount(stoolAmount.substr(0, stoolAmount.length - 1));
            } else if (stoolAmount && stoolAmount.length === 1) {
              setStoolAmount();
            }
            newEvent.stoolAmount = stoolAmount;
          }}
        >
          <Text>{stoolAmount}</Text>
        </TouchableOpacity>

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
            submitEvent(newEvent);
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DiaperEntryScreen;
