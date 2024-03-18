import { View, Text, Image } from 'react-native'; 

import Ola from './ola';

import styles from './styles';

import logo from './logo.png';

export default function Mensagem () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.titulo}>
                Atividade 1 
                
            </Text>
            <Ola>Joao</Ola>
            <Ola>Maria</Ola>
        </View>
    );
}
