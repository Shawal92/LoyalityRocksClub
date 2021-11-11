import React ,{useState}from "react";
import { View,StyleSheet } from "react-native";
import * as Yup from "yup";
import ActivityIndicator from "../../components/ActivityIndicator";


import {
    ErrorMessage,
    Form,
    FormFields,
    SubmitButton,
  } from "../../components/formikForm";
import authApi from "../../api/auth";
import useApi from "../../hooks/useApi";

import useAuth from "../../auth/useAuth";
import Page from "../../../app/components/layout/Page";
import Paragraph from "../../../app/components/typography/Paragraph";
import Title from "../../../app/components/typography/Title";

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email address is required').email().label("Email"),
  });

const RequestPasswordScreen = (props) => {
  const forgetApi = useApi(authApi.forgetPassword);
   const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit =  async ({email}) => {

        
           const result = await forgetApi.request(email);
           console.log(result);
        //  if(result.data.isSuccess == false)
        //  {
        //    if(result.data.isException && result.data.isException == true){
        //      return setException(true);
        //    }
        //    return setLoginFailed(true);
        //  }
        //  setLoginFailed(false);
          props.navigation.navigate("EmailSent")
         //auth.forgetPassword(result.data.tokenResponse.accessToken);
      };
    return (
      <>
                <ActivityIndicator visible={forgetApi.loading} />
        <Page>
            <Title text="Request password" />
            <Paragraph>Please enter the email address associated with your account, and we will email you a link to reset your password.</Paragraph>
            <Form
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid Email"
          visible={loginFailed}
        />
         <View style={styles.formFields}>
        <FormFields
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          label="Email Address"
          textContentType="emailAddress"
        />
        </View>
        <SubmitButton title="Send Email" />
        
      </Form>
            
            
        </Page>
        </>
    )
}
const styles = StyleSheet.create({
    formFields:{
        paddingBottom: 10,
    },
});

export default RequestPasswordScreen;