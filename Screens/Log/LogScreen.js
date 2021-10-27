import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonLink from "../../components/ButtonLink";
import BackButton from "../../components/BackButton";
import styles from "../../Base.StyleSheet";
import moment from "moment";

var display = { dates: [] };

const LogScreen = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    var apiURL = "http://localhost:8000/api/get-all/1"; //Hard-coding until there's more than 1 baby
    if (!loaded) {
      fetch(apiURL, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          display = data;
          setLoaded(true);
        });
    }
  });

  return (
    <View style={styles.container}>
      <BackButton target="Main" />
      {display.dates.map((date) => {
        let viewDate = (
          <View>
            <Text key={date}>{date}</Text>
            {display[date].map((item) => {
              let viewItem;
              let comment;
              if (item.comment && item.comment.length) {
                console.log(item.comment);
                comment = <Text>Comment: {item.comment}</Text>;
              }
              if (item.dataType === "feeding") {
                viewItem = (
                  <View
                    key={item.id}
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                    }}
                  >
                    <Text>
                      {moment(item.time).format("h:mm a")} | Feeding |{" "}
                      {item.quantity} oz | {item.type}
                    </Text>
                    {comment}
                  </View>
                );
              } else if (item.dataType === "nap") {
                viewItem = (
                  <View
                    key={item.id}
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                    }}
                  >
                    <Text>
                      {moment(item.time).format("h:mm a")} | Sleep |{" "}
                      {item.startTime
                        ? moment(item.startTime).format("h:mm a")
                        : "?"}{" "}
                      |{" "}
                      {item.endTime
                        ? moment(item.endTime).format("h:mm a")
                        : "?"}
                    </Text>
                  </View>
                );
              } else if (item.dataType === "diaper") {
                viewItem = (
                  <View
                    key={item.id}
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                    }}
                  >
                    <Text>
                      {moment(item.time).format("h:mm a")} | Diaper |{" "}
                      {item.urineAmount} Urine | {item.stoolAmount} Stool
                    </Text>
                    {comment}
                  </View>
                );
              } else {
                viewItem = <Text key={item.id}>FOO {item.dataType}</Text>;
              }
              return viewItem;
            })}
          </View>
        );
        return viewDate;
      })}
    </View>
  );
};

export default LogScreen;
