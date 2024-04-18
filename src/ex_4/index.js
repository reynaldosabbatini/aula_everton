import { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'; 

import styles from './styles';

export default function Exemplo4 () {

    const [ txtEscrito, setTxtEscrito] = useState(" ");
    const [Mensagem, setMensagem] = useState('texto programado');

    const ExibeTexto = () => {
        setMensagem(textoEscrito);
        setTextoEscrito('');
    }
    
    

    function atualizaTextoHandle (txt) {
        setTxtDigitado(txt);
    }
    function handleExibeTexto () {
        setTxtela (txt2);
        setTxt2('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.}>Exemplo 4</Text> 

            <Text style={styles.texto}>{ txtDigitado}</Text> 

            
            <TextInput
             style={styles.input}
             onChangeText={(vlr)=> atualizaTextoHandle (vlr)}
              />

              <View style={styles.linha}></View>

              <Text style={styles.texto}>{txtTela}</Text>

              <TextInput
              style={styles.input}
              onChangeText={(vlr) =>setTxt2(vlr)}
              value={txt2}
              />

              <Pressable 
              style={({ pressad })=>pressad ? [styles.botao, styles.botaoPress] : styles.botao}
              onPress={() => handleExibeTexto()}
                
              >
                < Text style={styles.txtBotao}>Exibir texto</Text>
            
                
              </Pressable>

            
        </View>
    );
}
