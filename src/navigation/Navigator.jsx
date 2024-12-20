import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from '../screens/Main.jsx';
import SignupScreen from '../screens/SignupScreen.jsx';
import Question62 from '../screens/Question62.jsx';
import Question63 from '../screens/Question63.jsx';
import Question63t from '../screens/Question63t.jsx';
import Question64 from '../screens/Question64.jsx';
import Question65 from '../screens/Question65.jsx';
import Question65t from '../screens/Question65t.jsx';
import Question66 from '../screens/Question66.jsx';
import Question67 from '../screens/Question67.jsx';
import Question68 from '../screens/Question68.jsx';


 const Stack = createStackNavigator();


 export default function AppNavigator() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Main"> 
         <Stack.Screen name="Main" component={Main} />
         <Stack.Screen name="SignupScreen" component={SignupScreen} />
         <Stack.Screen name="Question62" component={Question62} />
         <Stack.Screen name="Question63" component={Question63} />
         <Stack.Screen name="Question63t" component={Question63t}/>
         <Stack.Screen name="Question64" component={Question64} />
         <Stack.Screen name="Question65" component={Question65} />
         <Stack.Screen name="Question65t" component={Question65t} />
         <Stack.Screen name="Question66" component={Question66} />
         <Stack.Screen name="Question67" component={Question67} />
         <Stack.Screen name="Question68" component={Question68} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }