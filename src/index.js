/**
 * yarn add react-navigation react-native-gesture-handler (rotas/navegação)
 * yarn add jetifier -D (compatibilização com android X)
 * yarn run jetify
 *
 * console.disableYellowBox = true; (elimina mensagens de "warning" no emulador)
 */
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <App />
      </PersistGate>
    </Provider>
  );
}
