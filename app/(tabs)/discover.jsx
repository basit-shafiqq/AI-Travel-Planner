import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react'
import { chatSession } from '../../configs/AiModal';
import { auth, db } from './../../configs/FirebaseConfig'
import { doc, setDoc } from "firebase/firestore";
import { getDatabase } from 'firebase/database';

export default function discover() {

  

  return (
    <ScrollView>
      <View>
        <Text>discover</Text>
      </View>
    </ScrollView>

  )
}