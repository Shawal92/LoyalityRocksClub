import React from "react";
import { StyleSheet, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";

const Title = (props) => {
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Text style={styles.alert}>{props.text}</Text>
        );
    }
}

export default Title;

const styles = StyleSheet.create({
    alert: {
        backgroundColor: "#d4edda",
        borderColor: "#c3e6Cc",
        borderTopWidth: 1,
        bottom: 0,
        color: "#155724",
        elevation: 10,
        fontFamily: "OpenSans_400Regular",
        fontSize: 16,
        left: 0,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        position: "absolute",
        right: 0,
    },
});

