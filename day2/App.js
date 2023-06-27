import React from "react"
import App from "./thing"
import { ScrollView, View, Text, SafeAreaView, Button, Modal, TextInput, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
export default function App2() {
  const [posts, setPosts] = useState()
  const [creating, setCreating] = useState(false)
  useEffect(()=>{
    fetch('http://192.168.4.142:3000/api/getposts')
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
      <Button style={{position:'absolute'}} title="+" color={"#1e873a"}  onPress={() =>{setCreating(!creating)}}>
      </Button>
      </View>
      <Modal transparent={true} visible={creating}>
        <View style={{flex:1, alignItems: 'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
          <View style={{backgroundColor:'#fff', width: '90%', padding:20, borderRadius:10}}>
            <Text>Modal</Text>
            <TextInput style={{borderWidth:1}}>  
            </TextInput>
            <Button title="close" onPress={() =>{setCreating(!creating)}}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}
