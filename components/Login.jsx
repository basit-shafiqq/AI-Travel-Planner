import { View, Text,Image ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();
  return (
    <View>
       <Image source={require('./../assets/images/login.png')}
          style={{
            width:'100%',
            height:500
          }}
       />

       <View style={styles.container}>
        <Text style={{
            fontSize:30,
            fontFamily:'outfit-bold',
            textAlign:'center',
        }}>AI TRAVEL BUDDY</Text>

        <Text style={{
            fontFamily:'outfit-regular',
            fontSize:17,
            textAlign:'center',
            color:Colors.GRAY,
            marginTop:10,
          
        }}> Let AI Travel Planner create personalized itineraries for you. Discover top destinations and deals effortlessly, all in one app.</Text>

        <TouchableOpacity
         onPress={()=>router.push('auth/sign-in')}
         style={styles.button}>
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit-medium',
                fontSize:17}}>
                Get Started
            </Text>
        </TouchableOpacity
        >
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        height:'100%',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding:25,
    },

    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'25%',
    }
})

