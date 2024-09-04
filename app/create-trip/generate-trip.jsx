import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import { prompt } from '../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { auth, db } from './../../configs/FirebaseConfig'
import { doc, setDoc } from "firebase/firestore";

export default function GenerateTrip() {
    const { tripData } = useContext(CreateTripContext);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const user = auth.currentUser;

    const GenerateAITrip = async (tripData) => {
        setLoading(true);
        const { locationInfo, totalDays, travelerInfo, budgetInfo } = tripData;
        const totalNights = totalDays - 1;

        const final_prompt = prompt
            .replace('{location}', locationInfo.name)
            .replace('{totalDays}', totalDays)
            .replace('{totalNights}', totalNights)
            .replace('{traveler}', travelerInfo.title)
            .replace('{budget}', budgetInfo.title);

        console.log(final_prompt);
        const result = await chatSession.sendMessage(final_prompt);
        console.log(result.response.text());
        const tripResp = result.response.text();
        setLoading(false);
        const docId = (Date.now()).toString();
        const output = await setDoc(doc(db, "UserTrips", docId), {

            userEmail: user.email,
            tripPlan: JSON.parse(tripResp), //AI result
            // tripData:JSON.stringify(tripData), //User selected data
            docId:docId,

        })


        router.push('/mytrip');



    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Generate Trip',
        });

        if (tripData) {
            GenerateAITrip(tripData);
        }
    }, [navigation, tripData]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please wait...</Text>
            <Text style={styles.subtitle}>We are working to generate your trip</Text>
            <Image
                source={require('./../../assets/images/plane.gif')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop: 78,
        marginTop: 10,
        backgroundColor: Colors.WHITE,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: 'outfit-bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 40,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
});
