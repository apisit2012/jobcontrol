import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { name as appName } from './app.json';
import App from './App';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './src/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default function Main() {
  return (
      <Provider store={store}>
        <SafeAreaProvider>
            <PaperProvider>
                <App />
            </PaperProvider>
        </SafeAreaProvider>
      </Provider>
  );
}


AppRegistry.registerComponent(appName, () => Main);