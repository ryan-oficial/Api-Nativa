import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contatos from './Pages/Contatos';
import TextToSpeech from './Pages/TextToSpeech';
import Location from './Pages/Location';
import ImagemCamera from './Pages/ImagemCamera';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contatos" component={Contatos}/>
        <Tab.Screen name="TextToSpeech" component={TextToSpeech}/>
        <Tab.Screen name="Seu local" component={Location}/>
        <Tab.Screen name="Imagem Camera" component={ImagemCamera}/>
      </Tab.Navigator>
     </NavigationContainer>
  );
}

export default App;
