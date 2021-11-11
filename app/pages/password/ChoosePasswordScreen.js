import React from "react";

import Form from "../../../app/components/forms/Form";
import FormButton from "../../../app/components/formikForm/FormButton";
import FormError from "../../../app/components/forms/FormError";
import FormField from "../../../app/components/forms/FormField";
import FormInputText from "../../../app/components/forms/FormInputText";
import FormLabel from "../../../app/components/forms/FormLabel";
import Page from "../../../app/components/layout/Page";
import Paragraph from "../../../app/components/typography/Paragraph";
import Title from "../../../app/components/typography/Title";

const ChoosePasswordScreen = ({ navigation, route }) => {
    const { email, code } = route.params;
  // in your view you provide a form to set the new password
  const [newPassword, setNewPassword] = useState("");

  const onButtonPress = () => {
    // call api with params email, code, newPassword
  };
    return (
        /* here you provide a form and a button for your api call */

        <Page>
            <Title text="Choose your password" />
            <Paragraph>Please enter the new password you wish to use with your Loyalty Rocks Club account.</Paragraph>
            <Form>
                <FormField>
                    <FormLabel text="New password:" />
                    <FormInputText />
                    <FormError text="Please enter a new password." />
                </FormField>
                <FormField>
                    <FormLabel text="Confirm new password:" />
                    <FormInputText />
                    <FormError text="Please confirm your new password." />
                </FormField>
                <FormButton text="Update password" onPress={() => navigation.navigate("Login")} />
            </Form>
        </Page>
    )
}

export default ChoosePasswordScreen;