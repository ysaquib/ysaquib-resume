import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";

const MyResume = () =>
(
    <Document>
        <Page size="A4">
            <Text>
                test
            </Text>
        </Page>
    </Document>
);

export default MyResume;