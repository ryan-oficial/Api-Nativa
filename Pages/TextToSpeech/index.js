import { speak } from 'expo-speech';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, StatusBar, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currenHeight || 0,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        borderRadius: 6
    },
})
const TextToSpeech = () =>{
    const [text, setText] = useState('');

    const speak = () =>{
       // let TextToSpeech = "Ola bom dia";
        Speech.speak(text);
    }

    return(
        <View style={styles.container}>
            <TextInput value={text} onChangeText={ t => setText(t)} style={styles.input} />
            <Button title="Clique para falar" onPress={() => speak()}/>
            <Text>Text To Speech</Text>
        </View>
    )
}

export default  TextToSpeech;