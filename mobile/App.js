import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

import 'react-native-gesture-handler';

export default function mobile() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#eee" />
      <Routes />
    </>
  );
}
