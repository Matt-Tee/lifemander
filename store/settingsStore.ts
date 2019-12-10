import { observable } from "mobx";
import { create, persist } from 'mobx-persist'
import { AsyncStorage } from "react-native";

class SettingsStore {
  @observable
  hydrated = false

  @persist
  @observable
  lifeList = []
}

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
})

export const settingsStore = new SettingsStore()

hydrate('settings', settingsStore).then(()=> console.log('settings hydrated'))