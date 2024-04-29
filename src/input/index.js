import { TextInput } from "react-native";

import styles from './styles';

function Input ({placeholder, valor, atualizavalor}) {
    return(
        <TextInput
        style={[styles.Input, {outline: 'none'}]}
        placeholder={placeholder}
        placeholderTextColor='lightgray' 
        returnKeyType='numeric'
        value={valor}
        onChangeText={vlr => atualizavalor(vlr)}
        />


    );
}

export default Input;