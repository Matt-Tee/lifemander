import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Provider } from "mobx-react";
import Section from "./components/Section";
import { settingsStore } from "./store/settingsStore";

const icon = require("./assets/icon.png");

export default function App() {

  function handleShowMoadal(){

  }

  return (
    <Provider store={settingsStore}>
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            position: "absolute",
            width: '100%',
            height: '100%',
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={{ width: 100, height: 100, alignItems: "center", justifyContent: "center" }} onPress={this.handleShowModal} >
          <Image source={icon} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
}
