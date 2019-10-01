/**
 * yarn add react-navigation react-native-gesture-handler (rotas/navegação)
 * yarn add jetifier -D (compatibilização com android X)
 * yarn run jetify
 *
 */
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
