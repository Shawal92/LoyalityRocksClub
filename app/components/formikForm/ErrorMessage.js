import React from "react";
import { StyleSheet } from "react-native";

import Text from "../AppText";

function ErrorMessage({ error, visible, standalone }) {
    if (!visible || !error) {
        if (standalone == "true") {
            return null;
        }
        else {
            return <Text style={styles.error}></Text>;
        }
    }
    else {
        if (standalone == "true") {
            return <Text style={styles.errorStandalone}>{error}</Text>;
        }
        else {
            return <Text style={styles.error}>{error}</Text>;
        }
    }
}

const styles = StyleSheet.create({
    error: { color: "red", paddingBottom: 10, },
    errorStandalone: { color: "red", marginTop: -29, paddingBottom: 10, },
});

export default ErrorMessage;
