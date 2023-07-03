import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Homescreen";
import DetailsScreen from "./Detailsscreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* <Stack.Screen name="Comments" component={CommentsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
