import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import SubNumber from "./SubNumber";

interface props {
  number: Number;
  width: String;
}

const colors: string[] = ["blue", "red", "orange", "brown"];

export default class Section extends Component<props> {
  handlePress = () => {};

  handleLongPress = () => {};
  render() {
    const { number, width } = this.props;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: colors[number.toString()],
          width: width
        }}
        onPress={this.handlePress}
        onLongPress={this.handleLongPress}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>{number}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <SubNumber />
        </View>
      </TouchableOpacity>
    );
  }
}
