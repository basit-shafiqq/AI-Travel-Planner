import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { CreateTripContext } from './../context/CreateTripContext'
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-regular': require('./../assets/fonts/Outfit-Regular.ttf')
  })
  
  const [tripData,setTripData] = useState([]);
  return (
    // <Stack>
    //   <Stack.Screen name="index" options={{
    //     headerShown: false,
    //   }} />
    // </Stack>
    <CreateTripContext.Provider value={{tripData,setTripData}}>
      <Stack screenOptions={{
        headerShown: false,
      }}>

        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
