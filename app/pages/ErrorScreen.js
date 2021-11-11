import React from "react";

import Email from "../components/typography/Email";
import Page from "../components/layout/Page";
import Paragraph from "../components/typography/Paragraph";
import Title from "../components/typography/Title";

const ErrorScreen = () => {
    return (
        <Page>
            <Title text="Page not found" />
            <Paragraph>We're sorry, the page you requested could not be found. It may have been removed from the server, or may be unavailable at the present time.</Paragraph>
            <Paragraph>The error has been logged, but if you need any support please <Email address="team@carnivallrc.co.uk" text="contact us" />.</Paragraph>
        </Page>
    )
}

export default ErrorScreen;