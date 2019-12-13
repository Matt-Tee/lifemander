import React, { Component } from "react";
import { View, TouchableOpacity, Image, Button } from "react-native";
import Section from "../components/Section";
import Modal from "react-native-modal"
import { inject, observer } from "mobx-react";
import { SettingsStore } from "../store/settingsStore";

const icon = require("../assets/d20-icon.png");

interface MainScreenProps {}

interface InjectedProps extends MainScreenProps {
  store: SettingsStore;
}

@inject("store")
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

  handleRestart = () => {
    this.injected.store.players.map((player) =>
    player.restartGame()
    )
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { store } = this.injected;
    if (!store.hydrated) {
      return <View></View>;
    }

    return (
      <View
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <View style={{ height: "50%" }}>
          <Section index={0} key={0} flipped={true} />
        </View>
        <View style={{ height: "50%" }}>
          <Section index={1} key={1} />
        </View>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
          pointerEvents="box-none"
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
        <Modal
          isVisible={this.state.showModal}
          onBackButtonPress={this.handleHideModal}
          onBackdropPress={this.handleHideModal}
        >
          <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 20}}>
            <Button title="Restart Game" onPress={this.handleRestart}/>
          </View>
        </Modal>
      </View>
    );
  }
}
