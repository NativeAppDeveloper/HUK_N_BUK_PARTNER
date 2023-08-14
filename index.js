
import 'react-native-gesture-handler';
import * as React from "react"
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
// import { persistor,store }from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import store,{ persistor } from './src/redux/store';

const Root = () => {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider> 
    )
  }

AppRegistry.registerComponent(appName, () => Root);