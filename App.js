import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/Navigator/Navigator";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const App = () => {

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
