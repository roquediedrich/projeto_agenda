import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import tela_inicial from './tela_inicial';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }) {
  const { contactsListRef } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Tela Inicial',
          tabBarIcon:  ({ color, size}) => <Ionicons name="home-outline" size={size} color={color} />
        }}
        name="tela_inicial"
        component={tela_inicial}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const contactsListRef = useRef([]);

  useEffect(() => {
    ContactRepository.getAll().then((rows) => contactsListRef.current = rows)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};