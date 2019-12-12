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

class Player {
  @persist
  @observable
  life = 40;

  @persist
  @observable
  color = "blue";

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
  changeLife(sign: string){
    let life = this.life
    if(sign == '+'){
      life = this.life + 1
    } else {
      life = this.life -1
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
  newPlayer(color) {
    this.usedColors.push(color);
    let player = new Player();
    player.color = color;
    this.players.push(player);
  }

  @action
  restartGame() {
    this.players.forEach(player => {
      player.restartGame();
    });
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
    settingsStore.newPlayer("blue");
    settingsStore.newPlayer("red");
    console.log("settings initialised");
    settingsStore.hydrated = true;
  } else {
    console.log("settings hydrated");
    settingsStore.hydrated = true;
  }
});
