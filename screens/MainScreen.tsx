import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Section from "../components/Section";
import { inject, observer } from "mobx-react";
import { SettingsStore } from '../store/settingsStore'

const icon = require("../assets/d20-icon.png");

interface MainScreenProps {
}

interface InjectedProps extends MainScreenProps {
  store: SettingsStore;
}

@inject('store')
@observer
export default class MainScreen extends Component<MainScreenProps, {}> {
  get injected() {
    return this.props as InjectedProps;
  }
 
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      submitting: false
    };
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {store} = this.injected
    
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={this.handleShowModal}
          >
            <Image source={icon} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
