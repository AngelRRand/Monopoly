import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Count from '../screens/Count';

const count = createStackNavigator();

const ContadorStack = () => {
  return (
    <NavigationContainer>
            <count.Navigator
                initialRouteName='count'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <count.Screen name="count" component={Count} />
            </count.Navigator>
        </NavigationContainer>
  )
}

export default ContadorStack