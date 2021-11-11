import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { OpenSansCondensed_700Bold } from "@expo-google-fonts/open-sans-condensed";

const Menu = (props) => {
    let [fontsLoaded] = useFonts({
        OpenSans_600SemiBold,
        OpenSansCondensed_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.menu}>
                <View style={styles.menuHeader}>
                    <View style={styles.menuHeaderIcon}></View>
                    <View style={styles.menuHeaderDetails}>
                        <Text style={styles.menuHeaderDetailsName}>Kyron V.</Text>
                        <Text style={styles.menuHeaderDetailsLink}>View my profile</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </View>
        );
    }
}

export default Menu;

const styles = StyleSheet.create({
    menu: {
        display: "flex",
        flexDirection: "column",
    },
    menuHeader: {
        backgroundColor: "#0071c1",
        borderBottomWidth: 4,
        borderColor: "#dc1f28",
        display: "flex",
        flexDirection: "row",
        height: 105,
        marginBottom: 10,
        padding: 20,
    },
    menuHeaderIcon: {
        width: 60,
    },
    menuHeaderDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    menuHeaderDetailsName: {
        color: "#fff",
        fontFamily: "OpenSansCondensed_700Bold",
        fontSize: 24,
        textTransform: "uppercase",
    },
    menuHeaderDetailsLink: {
        color: "#fff",
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 12,
        letterSpacing: 1,
        textTransform: "uppercase",
    },
});