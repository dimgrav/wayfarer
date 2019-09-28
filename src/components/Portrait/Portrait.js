// Base imports
// eslint-disable-line no-unused-vars
import React from "react";

// UI
import { ActivityIndicator, View } from "react-native";
import { Image } from "react-native-elements";

// Styles
import { PortraitStyles } from "./styles";

// Translations
import { withTranslation } from "react-i18next";


const Portrait = props => {
    return (
        <View style={PortraitStyles.container}>
            <Image
                source={props.portraitImage}
                style={PortraitStyles.portrait}
                PlaceholderContent={<ActivityIndicator />}
            />
        </View>
    );
};


export default withTranslation("translations")(Portrait);