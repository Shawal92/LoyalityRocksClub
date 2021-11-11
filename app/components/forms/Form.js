import React from "react";
import { StyleSheet, View } from "react-native";

const Form = (props) => {
    return (
        <View style={styles.form}>
            {props.children}
        </View>
    );
}

export default Form;

const styles = StyleSheet.create({
    form: {
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
    },
});