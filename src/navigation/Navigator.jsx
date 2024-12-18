import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TestScreen from '../screens/TestScreen.jsx';
import Question62 from '../screens/Question62.jsx';
import Question63 from '../screens/Question63.jsx';
import Question63t from '../screens/Question63t.jsx';
import Question65 from '../screens/Question65.jsx';
import Question65t from '../screens/Question65t.jsx';
import Question67 from '../screens/Question67.jsx';


 const Stack = createStackNavigator();

 // 나중에 TestScreen 지우고 initialRouteName= Main으로 변경
 export default function AppNavigator() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Test"> 
         <Stack.Screen name="Test" component={TestScreen} />
         <Stack.Screen name="Question62" component={Question62} />
         <Stack.Screen name="Question63" component={Question63} />
         <Stack.Screen name="Question63t" component={Question63t}/>
         <Stack.Screen name="Question65" component={Question65} />
         <Stack.Screen name="Question65t" component={Question65t} />
         <Stack.Screen name="Question67" component={Question67} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }