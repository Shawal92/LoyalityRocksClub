import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosePasswordScreen from "../pages/password/ChoosePasswordScreen";
import EmailSentScreen from "../pages/password/EmailSentScreen";
import LoginScreen1 from "../pages/LoginScreen1";
import RequestPasswordScreen from "../pages/password/RequestPasswordScreen";


const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: "#10549b", }, headerTintColor: "#fff", headerTitleStyle: { fontFamily: "OpenSansCondensed_700Bold", }, }}>
    <Stack.Screen name="Login" component={LoginScreen1} options={{ headerShown: false }} />
    <Stack.Screen name="RequestPassword" component={RequestPasswordScreen} options={{ title: "Password" }} />
    <Stack.Screen name="EmailSent" component={EmailSentScreen} options={{ title: "Password" }} />
    <Stack.Screen name="ChoosePassword" component={ChoosePasswordScreen} options={{ title: "Password" }} />
</Stack.Navigator>
);

export default AuthNavigator;
