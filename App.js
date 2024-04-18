import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
//import Exemplo5 from './src/ex_5';
import Atividade5 from './src/atividade5';
//import Mensagem from './src/atividade_1/index';
 //import Exemplo_3 from './src/ex3';
 //import Exemplo4 from './src/ex_4';
//import Atividade4 from './src/atividade4';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade5/>
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
