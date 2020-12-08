import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native'
import * as Contacts from 'expo-contacts';

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currenHeight || 0,
    },
    item: {
        backgoundColor: '#f9c2ff',
        padding: 20,
        marginbVertical: 8,
        marginHorizontal: 16,
    },
    nome: {
        fontSize: 32,
    },
});

const Item = ({nome}) => {
   // alert(JSON.stringify(item));
    return(
        <View style={Styles.item}>
        <Text style={styles.nome}>{nome}</Text>
        </View>
    )
}

const Contatos = () =>{
   
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
                setContatos(data);
             
            }
          }
        })();
      }, []);

    const renderItem = ([item]) =>{
        return(
            <Item nome={item.name} />
        )
    }

    return(
        <View>
            <Text>Contatos</Text>
            <FlatList
            data={contatos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Contatos;