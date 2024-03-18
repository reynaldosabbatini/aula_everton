import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,      
        justifyContent: 'center',
        backgroundColor:'#e3f2fd',
        borderRadius: 40,
        alignItems: 'center',
           
    },  
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold',
    },

    image:{
        width: '80%',
        resizeMode: 'center',
        
    },
});

export default styles;