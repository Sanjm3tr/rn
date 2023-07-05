import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useUser,
  SignIn,
} from "@clerk/clerk-expo";
import HomeScreen from "./Homescreen";
import SignUpScreen from "./SignUpScreen";
import DetailsScreen from "./Detailsscreen";

const clerkFrontendApi =
  "pk_test_Z3VpZGluZy1yYXB0b3ItMjEuY2xlcmsuYWNjb3VudHMuZGV2JA";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function SettingsScreen() {
  return <Text>Settings</Text>;
}

function SignInPage() {
  const { signOut } = useUser();
  return (
    <View>
      <Text>Welcome! You are signed in.</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

export default function App() {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <SignedIn>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Drawer">
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SignedIn>

      <SignedOut>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Sign In"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SignedOut>
    </ClerkProvider>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tab">
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Sign in" component={SignInPage} />
    </Drawer.Navigator>
  );
}
