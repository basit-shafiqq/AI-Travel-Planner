import { View, Text } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function TravelDate() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Travel Date',
        });
    }, [navigation]);


    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const onDateChange = (date, type) => {
        console.log("Selected Date: ", date, type);
        if (type == 'START_DATE') {
            setStartDate(moment(date));
        }
        else if (type == 'END_DATE') {
            setEndDate(moment(date));
        }

    };


    const OnDateSelection = () => {
        if (!startDate || !endDate) {
            alert('Please select start and end date');

        }
        else {
            const totalDays = endDate.diff(startDate, 'days') + 1;
            setTripData({
                ...tripData,
                startDate: startDate,
                endDate: endDate,
                totalDays: totalDays
            });
            router.push('/create-trip/select-budget');
        }

    }

    return (
        <View style={{
            padding: 25,
            paddingTop: 78,
            marginTop: 10,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>
            <Text style={{
                fontSize: 18,
                fontFamily: 'outfit-bold',
                marginTop: 20,
            }}>Travel Dates</Text>
            <CalendarPicker
                onDateChange={onDateChange}
                allowRangeSelection={true}
                minDate={new Date()}
                maxRangeDuration={40} />

            <TouchableOpacity
                onPress={OnDateSelection}
                style={{
                    padding: 15,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 15,
                    marginTop: 20,
                }}>
                <Text style={{
                    textAlign: 'center',
                    color: Colors.WHITE,
                    fontSize: 20,
                    fontFamily: 'outfit-regular'
                }}>
                    Continue
                </Text>


            </TouchableOpacity>
        </View>
    );
}
