import { observable, action } from "mobx";
import { create, persist } from "mobx-persist";
import { AsyncStorage } from "react-native";

class SubNumber {
  @persist
  @observable
  icon = "";

  @persist
  @observable
  number = 0;
}

export class Player {
  @persist
  @observable
  life = 40;

  @persist
  @observable
  color = "red";

  @persist("list", SubNumber)
  @observable
  subNumbers = [];

  @persist("list")
  @observable
  usedIcons = [];

  @action
  newSubNumber(icon: string) {
    this.usedIcons.push(icon);
    let subNumber = new SubNumber();
    subNumber.icon = icon;
    this.subNumbers.push(subNumber);
  }

  @action
  restartGame() {
    this.life = 40;
    this.subNumbers = [];
    this.usedIcons = [];
  }

  @action
  changeLife(sign: string, value: number){
    let life = this.life
    if(sign == '+'){
      life = this.life + value
    } else {
      life = this.life - value
    }
    this.life = life
  }
}

export class SettingsStore {
  @observable
  hydrated = false;

  @persist("list", Player)
  @observable
  players = [];

  @persist("list")
  @observable
  usedColors = [];

  @action
  newPlayer(color: string) {
    this.usedColors.push(color);
    let player = new Player();
    player.color = color;
    this.players.push(player);
  }

  @action
  changeLife(index: number, sign: string, value: number){
    this.players[index.toString()].changeLife(sign, value)
  }
}

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
});

export const settingsStore = new SettingsStore();

hydrate("settings", settingsStore).then(() => {
  if (!settingsStore.players.length) {
    console.log("new user detected");
    settingsStore.newPlayer("white");
    settingsStore.newPlayer("red");
    console.log("settings initialised");
    settingsStore.hydrated = true;
  } else {
    console.log("settings hydrated");
    settingsStore.hydrated = true;
  }
});
