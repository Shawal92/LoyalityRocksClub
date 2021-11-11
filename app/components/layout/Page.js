import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import  Constants  from "expo-constants";
const Page = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.page, style] }>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
}

export default Page;

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#fff",
        flex: 1,
        paddingBottom: 22,
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: Constants.statusBarHeight,
    },
    view: {
        flex: 1,
      },
});
