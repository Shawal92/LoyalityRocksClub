import React from "react";
import { StyleSheet, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";

const FormError = (props) => {
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
    });

    let error = null;
    if (props.visible) {
        error = props.text;
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Text style={styles.error}>{error}</Text>
        );
    }
}

export default FormError;

const styles = StyleSheet.create({
    error: {
        color: "#ff0000",
        fontFamily: "OpenSans_400Regular",
        fontSize: 13,
        marginTop: 5,
    },
});