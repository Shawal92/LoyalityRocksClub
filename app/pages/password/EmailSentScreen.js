import React from "react";

import Form from "../../../app/components/forms/Form";
import FormButton from "../../../app/components/formikForm/FormButton";
import Page from "../../../app/components/layout/Page";
import Paragraph from "../../../app/components/typography/Paragraph";
import Title from "../../../app/components/typography/Title";

const EmailSentScreen = () => {
    return (
        <Page>
            <Title text="Email sent" />
            <Paragraph>If a matching account was found, an email was sent to you with further instructions for resetting your password.</Paragraph>
            <Paragraph>If you do not see it, please check your spam/junk folder.</Paragraph>
            <Form>
                <FormButton text="Resend email" />
            </Form>
        </Page>
    )
}

export default EmailSentScreen;