import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home'
import Game from './components/game'
import Ladder from './components/ladder'
import Options from './components/options'


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Ladder" component={Ladder} />
        <Stack.Screen name="Options" component={Options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;