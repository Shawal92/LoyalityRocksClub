import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import TextInput from "./FormTextInput";
import ErrorMessage from "./ErrorMessage";
import FormLabel from "./FormLabel";
function FormFields({ label, name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
    <FormLabel text={label} style={styles.labelfont}  />
      <TextInput
        //onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
       <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
const styles = StyleSheet.create({
    labelfont: {
        fontSize:40,
    },
});
export default FormFields;
