import React from "react";
import { Provider } from "mobx-react";
import { settingsStore } from "./store/settingsStore";
import MainScreen from "./screens/MainScreen";


export default function App() {

  return (
    <Provider store={settingsStore}>
      <MainScreen/>
    </Provider>
  );
}
