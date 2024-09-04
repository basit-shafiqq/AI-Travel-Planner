import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { OptionList } from '../../constants/Options';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectTraveler() {
    const navigation = useNavigation();
    const [selectedTraveler, setSelectedTraveler] = useState(null);
    const { tripData, setTripData } = useContext(CreateTripContext);

    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Travelers',
        }, []);
    }, [navigation]);

    useEffect(() => {
        if (selectedTraveler !== null) {
            const selectedOption = OptionList.find(option => option.title === selectedTraveler);
            setTripData({
                ...tripData,
                travelerInfo: selectedOption || null,
            });
        }
    }, [selectedTraveler]);

    useEffect(() => {
        console.log(tripData);
    }, [tripData]);

    const handleContinue = () => {
        router.push('/create-trip/travel-date');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => setSelectedTraveler(item.title)}
            style={[
                styles.optionButton,
                {
                    backgroundColor: selectedTraveler === item.title ? Colors.LIGHT_GRAY : Colors.WHITE,
                    borderWidth: selectedTraveler === item.title ? 3 : 0,
                },
            ]}
        >
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Who's Travelling?</Text>
            <FlatList
                data={OptionList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
            <TouchableOpacity 
                style={styles.continueButton} 
                onPress={handleContinue}
                disabled={!selectedTraveler} // Disable button if no traveler is selected
            >
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 75,
        padding: 25,
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    headerText: {
        fontSize: 28,
        fontFamily: 'outfit-bold',
        margin: 15,
        marginTop: 40,
    },
    listContainer: {
        marginTop: 20,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    icon: {
        fontSize: 30,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
    },
    desc: {
        fontSize: 14,
        fontFamily: 'outfit-regular',
        color: Colors.GRAY,
    },
    continueButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: Colors.PRIMARY, // Replace with your primary color
        borderRadius: 10,
        alignItems: 'center',
        marginBottom:20,
    },
    continueButtonText: {
        fontSize: 18,
        color: Colors.WHITE,
        fontFamily: 'outfit-bold',
    },
});
