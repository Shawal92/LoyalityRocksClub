import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

export default function Status() {
    return (
        <View style={styles.status}>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    status: {
        backgroundColor: "#0b3a6c",
        height: Constants.statusBarHeight,
    },
});