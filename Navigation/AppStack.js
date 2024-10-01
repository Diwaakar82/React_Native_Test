import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu button pressed!")}>
                <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
              </Pressable>
            )
          }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          initialParams={{ "name": "Gowtham" }}
          options={{
            title: "Welcome About",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerLeft: () => (
            //   <Pressable onPress={() => alert("Menu button pressed!")}>
            //     <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
            //   </Pressable>
            // )
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}