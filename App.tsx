/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Validation from './src/navigation/Validation';
import { LogBox } from 'react-native';

function App(){
  LogBox.ignoreAllLogs();

  return (
    <NativeBaseProvider>
      <Validation/>
    </NativeBaseProvider>
  );
}

export default App;
