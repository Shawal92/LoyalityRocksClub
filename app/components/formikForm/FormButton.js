import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSans_700Bold } from "@expo-google-fonts/open-sans";

const Button = (props) => {
    let [fontsLoaded] = useFonts({
        OpenSans_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#10549b",
        borderRadius: 5,
        display: "flex",
        height: 48,
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontFamily: "OpenSans_700Bold",
        letterSpacing: 1,
        textTransform: "uppercase",
    }
});