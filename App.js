import "react-native-gesture-handler";
import React, { Fragment, useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { OpenSansCondensed_700Bold } from "@expo-google-fonts/open-sans-condensed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Status from "./app/components/layout/Status";
import AuthContext from "./app/auth/context";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();


export default function App() {
    const [data, setData] = useState(null);

    const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const prefix = Linking.makeUrl('/');


  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if(!token) return;
    setUser(jwtDecode(token));
  }
  function handleDeepLink(event){
    let data = Linking.parse(event.url);
    setData(data);
  }
  const linking = {
    prefixes: [prefix],
    config:{
      screens:{
        ChoosePassword: "resetpassword/:userid/:token"
      },
    },

  };
  async function getInitialURL(){
    const initialUrl = await Linking.getInitialURL();
    if(initialUrl) setData(Linking.parse(initialUrl));
  }
  useEffect(() => {
     restoreToken();
  

    Linking.addEventListener("url", handleDeepLink);
    if(!data){
      getInitialURL();
    }
    return () => {
      Linking.removeEventListener("url");
    };
  }, []);

//   useEffect(() => {
//     restoreToken();
//   }, []);

    let [fontsLoaded] = useFonts({
        OpenSans_600SemiBold,
        OpenSansCondensed_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Fragment>
                <Status />
                <AuthContext.Provider value={{ user, setUser }}>
                <NavigationContainer linking={linking}>
                 
                          {user ? <AppNavigator/> : <AuthNavigator />}

                </NavigationContainer>
                </AuthContext.Provider>
            </Fragment>
        );
    }
}


