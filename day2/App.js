import React from "react"
import App from "./thing"
import { ScrollView, View, Text, SafeAreaView} from 'react-native';
export default function App2() {
  return (
    <View style={{flex: 1, backgroundColor: "#e6e8e6", marginTop:35}}>

    <ScrollView>
     <App></App>
     <App></App>
     <App></App>
     <App></App>
     <App></App>
     <App></App>
     <App></App>
    </ScrollView>

    </View>
  );
}
