import React from "react";
import { StyleSheet, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import AppText from "../AppText";
const FormLabel = ({props}) => {
    let [fontsLoaded] = useFonts({
        OpenSans_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <AppText style={styles.label}>{props.text}</AppText>
        );
    }
}

export default FormLabel;

const styles = StyleSheet.create({
    label: {
        color: "#000",
        fontFamily: "OpenSans_600SemiBold",
        letterSpacing: 1,
        marginBottom: 3,
        textTransform: "uppercase",
    },
});