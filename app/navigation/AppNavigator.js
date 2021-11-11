import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";

import Menu from "../components/layout/Menu";

import ContactScreen from "../pages/ContactScreen";
import HomeScreen from "../pages/HomeScreen";
import LogoutScreen from "../pages/LogoutScreen";
import ClaimsScreen, {
    screenOptions as claimsScreenOptions
  } from "../pages/ClaimsScreen";
import ClaimsSuccessScreen from "../pages/ClaimsSuccessScreen";
import RewardsScreen, {
    screenOptions as rewardsScreenOptions
  }  from "../pages/RewardsScreen";
import RewardsVouchersScreen from "../pages/RewardsVouchersScreen";
import RewardsSuccessScreen from "../pages/RewardsSuccessScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const defaultNavOptions = {
    contentComponent: Menu,
    drawerActiveBackgroundColor: "#bbe3ff",
    drawerActiveTintColor: "#000",
    drawerContentContainerStyle: {
        paddingBottom: 5,
        paddingTop: 10,
    },
    drawerContentStyle: {
    },
    drawerInactiveTintColor: "#000",
    drawerItemStyle: {
        marginBottom: 5,
        marginHorizontal: 10,
        marginVertical: 0,
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    drawerLabelStyle: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        lineHeight: 16,
        marginVertical: -10,
        paddingTop: 5,
    },
    drawerStyle: {
        backgroundColor: "#fff",
        borderColor: "#10549B",
        borderRightWidth: 1,
        width: 311,
    },
    headerStyle: {
        backgroundColor: "#10549b",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontFamily: "OpenSansCondensed_700Bold",
        textTransform: "uppercase",
    },
    swipeEnabled: false
};

 const ClaimsStackNavigator = () => (
    <Stack.Navigator
    screenOptions={defaultNavOptions}>
        <Stack.Screen name="Claims" component={ClaimsScreen} options={claimsScreenOptions}/>
        <Stack.Screen name="Success" component={ClaimsSuccessScreen}/>
    </Stack.Navigator>
 );
 
 const RewardsStackNavigator = () => (
    <Stack.Navigator
    screenOptions={defaultNavOptions}>
        <Stack.Screen name="Rewards" component={RewardsScreen} options={rewardsScreenOptions}/>
        <Stack.Screen name="Vouchers" component={RewardsVouchersScreen}/>
        <Stack.Screen name="Successs" component={RewardsSuccessScreen}/>

    </Stack.Navigator>
 );
const AppNavigator = () => (
 
    <Drawer.Navigator
    drawerContent={props => <Menu {...props} />}
    initialRouteName="Home"
    screenOptions={defaultNavOptions}>
    <Drawer.Screen name="Home" component={HomeScreen}  options={{ title: "Home" }} />
    <Drawer.Screen name="ClaimsNavigator" component={ClaimsStackNavigator} options={{ title: "Claims" , headerShown: false}} />
    <Drawer.Screen name="RewardsNavigator" component={RewardsStackNavigator} options={{ title: "Rewards", headerShown: false }} />
    <Drawer.Screen name="Contact" component={ContactScreen} options={{ title: "Contact" }} />
    <Drawer.Screen name="Logout" component={LogoutScreen} options={{ title: "Log out" }} />
</Drawer.Navigator>

);

export default AppNavigator;
