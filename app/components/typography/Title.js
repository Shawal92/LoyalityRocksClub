import React from "react";
import { StyleSheet, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSansCondensed_700Bold } from "@expo-google-fonts/open-sans-condensed";

const Title = (props) => {
    let [fontsLoaded] = useFonts({
        OpenSansCondensed_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Text style={styles.title}>{props.text}</Text>
        );
    }
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: "#10549b",
        fontFamily: "OpenSansCondensed_700Bold",
        fontSize: 32,
        marginBottom: 20,
        textTransform: "uppercase",
    },
});

