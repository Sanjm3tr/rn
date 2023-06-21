import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button ,  SafeAreaView,
    ScrollView, TouchableOpacity} from 'react-native';
import {Image} from "expo-image"
import { Entypo } from '@expo/vector-icons';
// import img from "./assets/download.jpeg"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: "100%", height: 168, backgroundColor: "white", flexDirection: "column"}}>
{/* <View style={{flexDirection: "column",}}> */}

      <Text style={{fontWeight: "400", fontSize: 18,}}>Some guy</Text>
{/* </View> */}
      <Text style={{marginLeft: 150}}>7 seconds ago</Text>
      <Image source={require('./assets/download.jpeg')} onPress={() => {
        Alert.alert("you pressed on profile pic")}} style={{width: 60, height: 60, flex: 1, marginBottom: 1, borderRadius: 500}} />
      <TouchableOpacity activeOpacity={0.1}>

      <Entypo name="dots-three-vertical" size={24} color="black" style={{marginLeft:"90%"}} onPress={() => {Alert.alert("Yo wsup")}} />
      </TouchableOpacity>
      {/* <Button onPress={() => {Alert.alert("Yo wsup")}} title=":" /> */}
      <Text style={{fontSize:27, marginLeft: 150}}>This is text</Text>
      </View>
      
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    marginBottom: 8,
    height: "110%",
    shadowRadius: 1
  },
});