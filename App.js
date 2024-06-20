import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';

import NavegacaoStack from './src/navegacao/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <NavegacaoStack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 18,
  },
});
