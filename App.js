import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BleManager from '@config-plugins/react-native-ble-plx';
const bleManager = new BleManager();


export default function App() {

  bleManager.startDeviceScan([], (error, device) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(device);
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
