import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import defaultStyles from "../../config/styles";

function FormTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.input, { width }]}>
      
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

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

export default FormTextInput;
