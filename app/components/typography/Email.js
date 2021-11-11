import React from "react";
import { Linking, StyleSheet, Text } from "react-native";

const Email = (props) => {
    let linkText = props.address;
    if (props.text) {
        linkText = props.text;
    }
    return (
        <Text style={styles.email} numberOfLines={1} onPress={() => Linking.openURL("mailto:" + props.address)}>{linkText}</Text>
    );
}

export default Email;

const styles = StyleSheet.create({
    email: {
        color: "#10549b",
        textDecorationLine: "underline",
    },
});