import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';


export default function StartNewTripCard() {

    const router = useRouter();
    return (
        <View style={{
            padding: 20,
            marginTop: 50,
            display: 'flex',
            alignItems: 'center',
            gap:5
        }}>

            <Entypo name="location-pin" size={34} color="black" />
            <Text
                style={{
                    fontFamily: 'outfit-medium',
                    marginTop: 10,
                    fontSize: 20,

                }}
            >No Trips Planned Yet</Text>

            <Text
                style={{
                    fontFamily: 'outfit-regular',
                    marginTop: 10,
                    fontSize: 17,
                    textAlign: 'center',
                    color: Colors.GRAY,
                    

                }}
            >Looks like its time to plan a new travel experience! Get started
            </Text>

            <TouchableOpacity

            onPress={()=>router.push('/create-trip/search-place')}
            
            style={{
                backgroundColor: Colors.PRIMARY,
                padding: 15,
                borderRadius: 15,
                paddingHorizontal: 30,
                margin: 15,

            }}>
                <Text style={{ color: Colors.WHITE, fontFamily:'outfit-medium'}}>Start a new trip</Text>
            </TouchableOpacity>
        </View>
    )
}

