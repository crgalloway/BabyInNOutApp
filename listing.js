import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/feed")
      .then((response) => response.json())
      .then((records) => {
        this.setState({
          records: records,
        });
      })
      .catch((error) => console.log(error));
  }

  renderListing() {
    let recordList = [];
    this.state.records.map((record) => {
      return recordList.push(`<li key={record.id}>{record.name}</li>`);
    });

    return recordList;
  }

  render() {
    return <Text>{this.renderListing()}</Text>;
  }
}

export default Listing;
