import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import styles from './styles';

export default function Atividade5() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [sinal, setSinal] = useState ('');

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] =useState('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
        setSinal('+')
    }
    function divisao() {
        setTotal(parseFloat(n1) / parseFloat(n2));
        setSinal('/')
    }
    function subtracao() {
        setTotal(parseFloat(n1) - parseFloat(n2));
        setSinal('-')
    }
    
    function multiplicacao() {
        setTotal(parseFloat(n1) * parseFloat(n2));
        setSinal('*')
    }

    function zerar() {
      setTotal(0);
      setN1(0);
      setN2(0);
  }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica</Text>

            <Text style={styles.txtLabel}> 1º número </Text>
            <TextInput
               style={
                [
                    styles.txtEntrada,
                    isFocusN1 ?
                    {
                        borderColor: '#C51162',
                        outline: 'none',
                    }
                        :
                           {}
                ]
            }
            onFocus={() => setIsFocusN1(true)}
            onBlur={() => setIsFocusN1(false)}
            onChangeText={(num1) => setN1(num1)}
            value={n1}
            />
        

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.txtLabel}> 2º número</Text> 

            <TextInput
            style={
                [
                    styles.txtEntrada,
                    isFocusN2 ?
                    {
                        borderColor: '#C51162',
                        outline: 'none',
                    }
                    :
                    {}
                ]
            }
            onFocus={() => setIsFocusN2(true)}
            onBlur={() =>  setIsFocusN2(false)}
            onChangeText={(num2) => setN2(num2)}
            value={n2}
            />

            <Text style={[styles.txtSaida, {margin: 0 }]}> = </Text>
            <Text style={styles.txtLabel}> Total </Text>

            <TextInput
            style={
                [
                    styles.txtEntrada,
                    isFocusTotal ?
                    {
                        borderColor: '#C51162',
                        outline: 'none',
                    }
                  :
                    {}
                ]
            }
            onFocus={() => setIsFocusTotal(true)}
            onBlur={() => setIsFocusTotal(false)}
            editable={false}
            value={total ? parseFloat(total).toFixed(2) : '0.00'}
            />

            <Pressable
            onPress={() => soma()}
            style={
                ({pressed}) => pressed ?
                [styles.button, styles.buttonTouch]
              :
                styles.button
            }
              >
                <Text style={styles.textButton}> + </Text>
              </Pressable>

              
              <Pressable
            onPress={() => divisao()}
            style={
                ({pressed}) => pressed ?
                [styles.button, styles.buttonTouch]
              :
                styles.button
            }
              >
                <Text style={styles.textButton}> / </Text>
              </Pressable>
             
              <Pressable
            onPress={() => subtracao()}
            style={
                ({pressed}) => pressed ?
                [styles.button, styles.buttonTouch]
              :
                styles.button
            }
              >
                <Text style={styles.textButton}> - </Text>
              </Pressable>

              <Pressable
            onPress={() => multiplicacao()}
            style={
                ({pressed}) => pressed ?
                [styles.button, styles.buttonTouch]
              :
                styles.button
            }
              >
                <Text style={styles.textButton}> * </Text>
              </Pressable>

              <Pressable
            onPress={() => zerar()}
            style={
                ({pressed}) => pressed ?
                [styles.button, styles.buttonTouch]
              :
                styles.button
            }
              >
                <Text style={styles.textButton}> zerar </Text>
              </Pressable>  
  

        </View>
    );
}


