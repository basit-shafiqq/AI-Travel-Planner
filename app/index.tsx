import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import Login from './../components/Login'

export default function Index() {

  useFonts({
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-regular': require('./../assets/fonts/Outfit-Regular.ttf')
  })

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Login/>
    </View>
  );
}
