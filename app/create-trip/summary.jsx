import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect,useContext } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function TripSummary() {

   
    const navigation = useNavigation();
    const { tripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Budget',
        });
    }, [navigation]);

    const handleBookTrip = () => {
        router.push('/create-trip/generate-trip')
        // Implement the booking logic or navigate to the next page
        console.log("Trip booked!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Trip Summary</Text>

            <View style={styles.summaryItem}>
                <Text style={styles.label}>Destination:</Text>
                <Text style={styles.value}>{tripData.locationInfo.name} 🌍</Text>
            </View>

            <View style={styles.summaryItem}>
                <Text style={styles.label}>Travelers:</Text>
                <Text style={styles.value}>{tripData.travelerInfo.icon} {tripData.travelerInfo.title} - {tripData.travelerInfo.desc}</Text>
            </View>

            <View style={styles.summaryItem}>
                <Text style={styles.label}>Dates:</Text>
                <Text style={styles.value}>📅 {new Date(tripData.startDate).toDateString()} to {new Date(tripData.endDate).toDateString()} ({tripData.totalDays} days)</Text>
            </View>

            <View style={styles.summaryItem}>
                <Text style={styles.label}>Budget:</Text>
                <Text style={styles.value}>{tripData.budgetInfo.icon} {tripData.budgetInfo.title} - {tripData.budgetInfo.desc}</Text>
            </View>

            <TouchableOpacity 
                style={styles.bookButton} 
                onPress={handleBookTrip}
            >
                <Text style={styles.bookButtonText}>🚀 Book My Trip</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 95,
        padding: 25,
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    headerText: {
        fontSize: 28,
        fontFamily: 'outfit-bold',
        marginBottom: 20,
    },
    summaryItem: {
        marginVertical: 10,
    },
    label: {
        fontSize: 18,
        fontFamily: 'outfit-regular',
        color: Colors.GRAY,
    },
    value: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
    },
    bookButton: {
        marginTop: 40,
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        alignItems: 'center',
    },
    bookButtonText: {
        fontSize: 18,
        color: Colors.WHITE,
        fontFamily: 'outfit-bold',
    },
});
