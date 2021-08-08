import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";
import styles from "./MyResumeStyles";


const MyResume = () =>
(
    <Document>
        <Page size="A4" style={styles.page}>
            <Text>
                tests
            </Text>
        </Page>
    </Document>
);

export default MyResume;