import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default function App({ text, date }) {
  const [menu, setMenu] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 168,
          backgroundColor: "white",
          flexDirection: "column",
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 18 }}>Some guy</Text>
        <Text style={{ marginLeft: 150 }}>hehe</Text>
        <Image
          source={require("./assets/download.jpeg")}
          style={{ flex: 2, width: 60, height: 60, borderRadius: 50 }}
        />
        <View style={{ position: "relative", height: 29 }}>
          <TouchableOpacity activeOpacity={0.1} onPress={() => setMenu(!menu)}>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color="black"
              style={{ marginLeft: "90%" }}
            />
          </TouchableOpacity>
          <View
            style={{
              display: menu ? "flex" : "none",
              position: "absolute",
              width: 100,
              right: 0,
              top: 30,
              borderwidth: 1,
              backgroundColor: "#ccc",
              borderRadius: 5,
            }}
          >
            <View style={{ borderwidth: 1, borderColor: "black" }}>
              <Text>Edit</Text>
            </View>
            <Text>Delete</Text>
          </View>
        </View>
        <Text style={{ fontSize: 27, marginLeft: 150 }}>{text}</Text>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    marginBottom: 8,
    height: "110%",
    shadowRadius: 1,
  },
});
