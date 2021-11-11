import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loader = (props) => {
    let loader = null;
    if (props.visible) {
        loader = (
            <View style={styles.loader}>
                <View style={styles.loaderContainer}>
                    <Text style={styles.loaderText}>Loading, please wait...</Text>
                </View>
            </View>
        )
    }
    return (
        loader
    )
}

export default Loader;

const styles = StyleSheet.create({
    loader: {
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.25)",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
    },
    loaderContainer: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 5,
        display: "flex",
        elevation: 3,
        height: 100,
        justifyContent: "center",
        padding: 20,
        width: 250,
    },
    loaderText: {
        color: "#000",
    },
});