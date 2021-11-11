import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSansCondensed_700Bold } from "@expo-google-fonts/open-sans-condensed";

const Header = (props) => {
    let [fontsLoaded] = useFonts({
        OpenSansCondensed_700Bold,
    });

    const navigation = useNavigation(); 
    let navigationControl = null;

    if (props.backTo) {
        navigationControl = (
            <TouchableOpacity onPress={() => navigation.navigate(props.backTo)} style={styles.headerNavigation}>
                <Image source={require("../../assets/images/icon-left.png")} style={styles.headerNavigationIcon} />
            </TouchableOpacity>
        )
    }
    else if (props.menu) {
        navigationControl = (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerNavigation}>
                <Image source={require("../../assets/images/icon-menu.png")} style={styles.headerNavigationIcon} />
            </TouchableOpacity>
        )
    }
    else {
        navigationControl = (
            <TouchableOpacity style={styles.headerEmpty}></TouchableOpacity>
        )
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.header}>
                <View>{navigationControl}</View>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>{props.title}</Text>
                </View>
            </View>
        );
    }
};

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#10549b",
        display: "flex",
        flexDirection: "row",
    },
    headerNavigation: {
        alignItems: "center",
        display: "flex",
        height: 54,
        justifyContent: "center",
        width: 64,
    },
    headerNavigationIcon: {
        height: 16,
        width: 24,
    },
    headerEmpty: {
        width: 20,
    },
    headerTitle: {
        paddingBottom: 14,
        paddingRight: 20,
        paddingTop: 13,
    },
    headerTitleText: {
        color: "#ffffff",
        fontFamily: "OpenSansCondensed_700Bold",
        fontSize: 22,
        textTransform: "uppercase",
    },
});
