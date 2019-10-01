/**
 * yarn add react-navigation react-native-gesture-handler (rotas/navegação)
 * yarn add jetifier -D (compatibilização com android X)
 * yarn run jetify
 */
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { store, persistor } from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
