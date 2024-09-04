import { View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from './../../context/CreateTripContext'

export default function searchPlace() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search Place',
        }, [])
    });

    useEffect(() => {
        console.log(tripData);
    }, [tripData])

    return (
        <View style={{
            padding: 25,
            paddingTop: 78,
            marginTop: 10,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>

            <GooglePlacesAutocomplete
                placeholder='Search place...'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    console.log(data, details);
                    setTripData({
                        locationInfo: {
                            name: data.description,
                            coord: details.geometry.location,
                            photoRef: details?.icon,
                            url: details.url
                        }
                    });
                    router.push('/create-trip/select-traveler');
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                textInputProps={{
                    placeholderTextColor: 'gray',
                }}

                styles={{
                    textInputContainer: {
                        borderWidth: 1,
                        marginTop: 25,
                        borderRadius: 5,
                    }
                }}
            />

        </View>
    )
}
