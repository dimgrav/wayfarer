// Base imports
import React from "react";

// UI
import { View } from "react-native";
import { Portrait } from "../components/index";

// Translations
import { withTranslation } from "react-i18next";
import { withTranslatableTitle } from "../components/TranslatableScreenTitle";

// Styles
import { CharacterStyles as styles } from "./styles/Character";


class Character extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { t } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.portraitContainer}>
                    <Portrait />
                </View>
            </View>

        );
    }

}


export default withTranslation("translations")(withTranslatableTitle(Character, "screensCharacter"));