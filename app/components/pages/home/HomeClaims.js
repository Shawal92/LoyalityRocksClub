import React, { Fragment } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { OpenSansCondensed_700Bold } from "@expo-google-fonts/open-sans-condensed";

import FormButton from "../../formikForm/FormButton";

const HomeClaims = () => {
    let [fontsLoaded] = useFonts({
        OpenSans_600SemiBold,
        OpenSansCondensed_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Fragment>
                <ImageBackground source={require("../../../../assets/images/pages/home/background.jpg")} style={styles.claimsBackground}></ImageBackground>
                <View style={styles.claimsHero}>
                    <View style={styles.claimsHeroTitle}>
                        <Text style={styles.claimsHeroTitleText}>Claim your bookings</Text>
                        <Text style={styles.claimsHeroTitleText}>Earn rewards</Text>
                    </View>
                    <View style={styles.claimsButton}>
                        <FormButton text="Claim my bookings" />
                    </View>
                </View>
                <View style={styles.claimsSummary}>
                    <View style={styles.claimsSummaryTitle}>
                        <Text style={styles.claimsSummaryTitleText}>August 2021</Text>
                    </View>
                    <View style={styles.claimsSummaryBoxes}>
                        <View style={styles.claimsSummaryBox}>
                            <Text style={styles.claimsSummaryBoxValue}>4</Text>
                            <Text style={styles.claimsSummaryBoxLabel}>Sales claimed</Text>
                        </View>
                        <View style={styles.claimsSummaryBox}>
                            <Text style={styles.claimsSummaryBoxValue}>400</Text>
                            <Text style={styles.claimsSummaryBoxLabel}>Points earned</Text>
                        </View>
                    </View>
                </View>
            </Fragment>
        );
    }
}

export default HomeClaims;

const styles = StyleSheet.create({
    claimsBackground: {
        backgroundColor: "#fff",
        height: 325,
        position: "absolute",
        width: "100%",
    },
    claimsHero: {
        padding: 40,
    },
    claimsHeroTitle: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginBottom: 30,
    },
    claimsHeroTitleText: {
        color: "#fff",
        fontFamily: "OpenSansCondensed_700Bold",
        fontSize: 32,
        textTransform: "uppercase",
    },
    claimsSummary: {
        backgroundColor: "#fff",
        borderRadius: 3,
        elevation: 2,
        marginBottom: 40,
        marginHorizontal: 17,
    },
    claimsSummaryTitle: {
        padding: 15,
    },
    claimsSummaryTitleText: {
        color: "#10549b",
        fontFamily: "OpenSansCondensed_700Bold",
        fontSize: 24,
        textAlign: "center",
        textTransform: "uppercase",
    },
    claimsSummaryBoxes: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: 15,
        paddingHorizontal: 7.5,
    },
    claimsSummaryBox: {
        alignItems: "center",
        borderColor: "#eee",
        borderRadius: 2,
        borderWidth: 1,
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        marginHorizontal: 7.5,
        padding: 20,
    },
    claimsSummaryBoxValue: {
        color: "#10549b",
        fontFamily: "OpenSansCondensed_700Bold",
        fontSize: 36,
        marginBottom: 10,
    },
    claimsSummaryBoxLabel: {
        color: "#000",
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 3,
        textTransform: "uppercase",
    },
});