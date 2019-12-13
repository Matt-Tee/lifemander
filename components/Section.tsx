import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { inject, observer } from "mobx-react";
import SubNumber from "./SubNumber";
import { SettingsStore } from "../store/settingsStore";

interface props {
  index: Number;
  flipped?: boolean;
}

interface InjectedProps extends props {
  store: SettingsStore;
}

@inject("store")
@observer
export default class Section extends Component<props, {}> {
  get injected() {
    return this.props as InjectedProps;
  }

  handleLifeChange = ({ index, sign, value }) => {
    this.injected.store.changeLife(index, sign, value);
  };

  render() {
    const index = this.props.index;
    const player = this.injected.store.players[index.toString()];
    return (
      <View style={{ flex: 1, backgroundColor: player.color }}>
        <View
          style={{
            flex: 1
          }}
        >
          {this.props.flipped ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "+",
                  value: 5
                })}
              >
                <Text style={{ fontSize: 30, transform: [{ rotate: "180deg" }], padding: 15, margin: 10 }}>{"+5"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "+",
                  value: 1
                })}
              >
                <Text style={{ fontSize: 30, transform: [{ rotate: "180deg" }], padding: 15, margin: 10 }}>{"+"}</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 50, transform: [{ rotate: "180deg" }] }}>
                {player.life}
              </Text>
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "-",
                  value: 1
                })}
              >
                <Text style={{ fontSize: 30, transform: [{ rotate: "180deg" }], padding: 15, margin: 10 }}>{"-"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "-",
                  value: 5
                })}
              >
                <Text style={{ fontSize: 30, transform: [{ rotate: "180deg" }], padding: 15, margin: 10 }}>{"-5"}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "-",
                  value: 5
                })}
              >
                <Text style={{ fontSize: 30, padding: 15, margin: 10 }}>{"-5"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "-",
                  value: 1
                })}
              >
                <Text style={{ fontSize: 30, padding: 15, margin: 10 }}>{"-"}</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 50 }}>{player.life}</Text>
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "+",
                  value: 1
                })}
              >
                <Text style={{ fontSize: 30, padding: 15, margin: 10 }}>{"+"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleLifeChange.bind(this, {
                  index,
                  sign: "+",
                  value: 5
                })}
              >
                <Text style={{ fontSize: 30, padding: 15, margin: 10 }}>{"+5"}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <SubNumber />
        </View> */}
      </View>
    );
  }
}
