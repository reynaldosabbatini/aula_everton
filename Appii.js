import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
//import Mensagem from './src/atividade_1/index';
 import Exemplo_3 from './src/ex3';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
