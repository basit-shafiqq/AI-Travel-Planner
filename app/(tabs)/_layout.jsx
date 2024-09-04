import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function _layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}>
      <Tabs.Screen name="mytrip"
        options={{
          tabBarIcon: ({ color }) => <Entypo name="location-pin" size={24} color={color} />,
          tabBarLabel:'My Trip',
        }}
      />
      <Tabs.Screen name="discover"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="find" size={24} color={color} />,
          tabBarLabel:'Discover'
        }}
      />
      <Tabs.Screen name="profile"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          tabBarLabel:'Profile',
        }}
      />
    </Tabs>
  )
}