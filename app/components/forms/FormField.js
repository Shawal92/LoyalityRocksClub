import React from "react";
import { StyleSheet, View } from "react-native";

const FormField = (props) => {
    return (
        <View style={styles.field}>
            {props.children}
        </View>
    );
}

export default FormField;

const styles = StyleSheet.create({
    field: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
    },
});