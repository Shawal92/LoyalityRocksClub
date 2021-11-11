import React, { useState } from "react";
import { StyleSheet, Image, Button,View,TouchableOpacity, ScrollView, ImageBackground} from "react-native";
import * as Yup from "yup";

import Loader from "../components/layout/Loader";
import Page from "../components/layout/Page";
import {
  ErrorMessage,
  Form,
  FormFields,
  SubmitButton,
} from "../components/formikForm";
import Alert from "../components/typography/Alert";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
 import Text from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import * as Device from 'expo-device';
import UAParser from "ua-parser-js";
import  {useNetInfo} from '@react-native-community/netinfo';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email address is required').email().label("Email"),
  password: Yup.string().required('Password is required').min(4).label("Password"),
});






function LoginScreen1(props) {
  const netinfo = useNetInfo();


  
  const loginApi = useApi(authApi.login);
   const auth = useAuth();
   const [loginFailed, setLoginFailed] = useState(false);
  const [exception, setException] = useState(false);
  
  const handleSubmit = async ({ email, password }) => {
  const ip = netinfo.details.ipAddress;
    
    const browserName = UAParser.BROWSER.NAME;
    const browserVersion = UAParser.BROWSER.VERSION;
const loginattempt = {"ipAddress": ip, "userAgentFamily": null, "userAgentMajor": null, "osFamily": Device.osName, "osMajor": Device.osVersion, "deviceFamily":Device.deviceName}
  
    const result = await loginApi.request(email, password, loginattempt);
    // if (!result.ok) return setLoginFailed(true);
    // setLoginFailed(false);
    if(result.data.isSuccess == false)
    {
      if(result.data.isException && result.data.isException == true){
        return setException(true);
      }
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    auth.logIn(result.data.tokenResponse.accessToken);

    

    
  };
  return (
      <>
          <ActivityIndicator visible={loginApi.loading} />
         <ScrollView style={styles.loginContainer} contentContainerStyle={{ flexGrow: 1 }}>
              <ImageBackground source={require("../../assets/images/pages/login/background.png")} style={styles.loginBackground}>
                  {/*<Alert text="Your password has been updated!" />*/}
         <View style={styles.loginHeader}>
      <Image style={styles.loginLogo} source={require("../../assets/images/pages/login/logo.png")} />
        </View>
        <View style={styles.loginBody}>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        
        <View style={styles.formFields}>
        <FormFields
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          label="Email Address"
         
          textContentType="emailAddress"
        />
        </View>
        <ErrorMessage
          error="Login details incorrect, please try again."
          visible={loginFailed}
          standalone="true"
        />
        <ErrorMessage
          error="Exception generated"
          visible={exception}
          standalone="true"
        />
        <View style={styles.formFields}>
        <FormFields
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          label="Password"
          
          secureTextEntry
          textContentType="password"
        />
        </View>
        
        <SubmitButton title="Login"  />
        
      </Form>
      </View>
      <TouchableOpacity  style={styles.loginFooter} onPress={() => props.navigation.navigate("RequestPassword")}>
                        <Text style={styles.loginFooterText}>First time here, or forgot your password?</Text>
                    </TouchableOpacity>
                    </ImageBackground>
          </ScrollView>
          <Loader />
    </>
  );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    loginBackground: {
        flex: 1,
        padding: 30,
    },
    loginHeader: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 50,
        paddingTop: 50,
    },
    loginBody: {
        flex: 1,
        paddingBottom: 60,
        paddingTop: 30,
    },
    loginFooter: {
    },
    loginFooterText: {
        color: "#10549b",
        fontWeight: "bold",
        textAlign: "center",
        fontSize:14,
    },
    loginLogo: {
        height: 100,
    },
});

export default LoginScreen1;
