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
            <Text style={styles.paragraph}>{props.children}</Text>
        );
    }
}

export default Title;

const styles = StyleSheet.create({
    paragraph: {
        color: "#000",
        fontFamily: "OpenSans_400Regular",
        fontSize: 16,
        marginBottom: 20,
    },
});

