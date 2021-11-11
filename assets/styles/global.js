"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    paragraph: {
        marginBottom: 10,
    },
    paragraphLast: {
        marginBottom: 30,
    },
    formField: {
        marginBottom: 20,
    },
    formLabel: {
        letterSpacing: 2,
        marginBottom: 5,
        textTransform: "uppercase",
    },
    formInput: {
        backgroundColor: "#fff",
        borderColor: "#dbdbdb",
        borderRadius: 5,
        borderWidth: 1,
        height: 48,
        padding: 10,
    },
    formError: {
        color: "#ff0000",
        marginTop: 5,
    },
    formReadOnly: {},
});