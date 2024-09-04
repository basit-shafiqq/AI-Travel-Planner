import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';  // Added 'where' import
import { auth, db } from './../../configs/FirebaseConfig';
import UserTriplist from '../../components/MyTrips/UserTriplist';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);

  const router = useRouter();


  useEffect(() => {
    if (user) {
      getMyTrips();
    }
  }, [user]);

  const getMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);

    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
    });

    setLoading(false);
  };

  const search = ()=>{
    router.push('/create-trip/search-place');
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 34,
        }}>My Trip</Text>
        <TouchableOpacity onPress={search}><Ionicons name="add-circle" size={50} color="black" /></TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY} />}
      {userTrips?.length === 0 ? <StartNewTripCard /> : <UserTriplist userTrips={userTrips}/>
       
      }
    </View>
  );
}
