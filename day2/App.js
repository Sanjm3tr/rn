import React from "react"
import App from "./thing"
import { ScrollView, View, Text, SafeAreaView, Button} from 'react-native';
import { useState, useEffect } from 'react';
export default function App2() {
  const [posts, setPosts] = useState()
  useEffect(()=>{
    fetch('http://192.168.4.152:3000/api/getposts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.documents)
      })
  }, [])
  return (
    <View style={{flex: 1, backgroundColor: "#e6e8e6", marginTop:35, position:"relative"}}>

    <ScrollView>
      {posts?.map(({text}) => 
        (<App key={posts._id} text={text}></App>)
      )}
    </ScrollView>
      <View style={{position:"absolute", alignSelf: "flex-end", justifyContent: "flex-end", bottom: 10, width: 50, height: 50, right: 5}}>

      <Button style={{position:'absolute'}} title="+">
      </Button>
      </View>

    </View>
  );
}
