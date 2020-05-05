import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import logo from '../assets/instagram.png';

import Feed from '../pages/Feed';

export default function createRouter() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function Home() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'black',
          inactiveTintColor: '#777',
          style: {
            backgroundColor: '#f5f5f5',
            borderTopColor: '#c4c4c4',
          },
        }}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home-variant" size={35} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Buscar"
          component={Feed}
          options={{
            tabBarIcon: ({color}) => (
              <Icon2 name="search" size={35} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="New"
          component={Feed}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="plus-box-outline" size={35} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Activity"
          component={Feed}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="heart-outline" size={35} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Feed}
          options={{
            tabBarIcon: ({color}) => (
              <Icon2 name="person-outline" size={35} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => <Image source={logo} style={{left: -20}} />,
        headerLeft: () => (
          <Icon
            name="camera-outline"
            size={30}
            color="black"
            style={{marginLeft: 10}}
          />
        ),
        headerRight: () => (
          <IconSimple
            name="paper-plane"
            size={30}
            color="black"
            style={{marginRight: 10}}
          />
        ),
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      }}>
      <Stack.Screen name="Feed" component={Home} />
    </Stack.Navigator>
  );
}
