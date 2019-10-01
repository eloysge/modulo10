/**
 * yarn add reactotron-react-native reactotron-redux reactotron-redux-saga (Reactotron)
 * yarn add redux redux-saga react-redux
 *
 * yarn add redux-persist
 * yarn add @react-native-community/async-storage (a partir da v.6.0.0 do redux-persist)
 *
 * iOS:
 * cd ios
 * pod install
 */
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.0.237' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
