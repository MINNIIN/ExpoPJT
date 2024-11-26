import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TestScreen from '../screens/TestScreen.jsx';
import Question63 from '../screens/Question63.jsx';
import Question65 from '../screens/Question65.jsx';


 const Stack = createStackNavigator();

 // 나중에 TestScreen 지우고 initialRouteName= Main으로 변경
 export default function AppNavigator() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Test"> 
         <Stack.Screen name="Test" component={TestScreen} />
         <Stack.Screen name="Question63" component={Question63} />
         <Stack.Screen name="Question65" component={Question65} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }