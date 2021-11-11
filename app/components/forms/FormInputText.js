import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const FormField = (...otherProps) => {
    return (
        <TextInput style={styles.input} {...otherProps} />
    );
}

export default FormField;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        borderColor: "#dbdbdb",
        borderRadius: 5,
        borderWidth: 1,
        height: 48,
        padding: 10,
    },
});