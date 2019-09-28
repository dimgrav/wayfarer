// Base imports
import React from "react";

// UI
import { View } from "react-native";

// Translations
import { withTranslation } from "react-i18next";
import { withTranslatableTitle } from "../components/TranslatableScreenTitle";


class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { t } = this.props;

        return (
            <View>

            </View>
        );
    }

}


export default withTranslation("translations")(withTranslatableTitle(Skills, "screensSkills"));