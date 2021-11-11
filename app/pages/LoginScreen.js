import React from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FormButton from "../app/components/forms/FormButton";
import FormError from "../app/components/forms/FormError";
import FormField from "../app/components/forms/FormField";
import FormInputText from "../app/components/forms/FormInputText";
import FormLabel from "../app/components/forms/FormLabel";

const LoginScreen = () => {
    const navigation = useNavigation(); 
    return (
        <SafeAreaView style={styles.login}>
            <ScrollView style={styles.loginContainer} contentContainerStyle={{ flexGrow: 1 }}>
                <ImageBackground source={require("../assets/images/pages/login/background.png")} style={styles.loginBackground}>
                    <View style={styles.loginHeader}>
                        <Image source={require("../assets/images/pages/login/logo.png")} style={styles.loginLogo} />
                    </View>
                    <View style={styles.loginBody}>
                        <FormField>
                            <FormLabel text="Email address:" />
                            <FormInputText />
                            <FormError text="Email address is required." visible />
                        </FormField>
                        <FormField>
                            <FormLabel text="Password:" />
                            <FormInputText />
                            <FormError text="Password is required." visible />
                        </FormField>
                        <FormButton text="Log in" onPress={() => navigation.navigate("Authenticated")} />
                    </View>
                    <TouchableOpacity style={styles.loginFooter} onPress={() => navigation.navigate("RequestPassword")}>
                        <Text style={styles.loginFooterText}>First time here, or forgot your password?</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    login: {
        flex: 1,
    },
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
    loginLogo: {
        height: 100,
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
    },
});
