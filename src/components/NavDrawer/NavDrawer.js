// Base imports
// eslint-disable-next-line no-unused-vars
import React from "react";

// UI
import { Text, View } from "react-native";

// Styles
import { NavDrawerStyles as styles } from "./styles";

// Translations
import { withTranslation } from "react-i18next";


const NavDrawer = ({ navigation, t }) => {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate("BackpackScreen")}
                style={styles.drawerItem}>
                {t("screensBackpack")}
            </Text>
            <Text
                onPress={() => navigation.navigate("CharacterScreen")}
                style={styles.drawerItem}>
                {t("screensCharacter")}
            </Text>
            <Text
                onPress={() => navigation.navigate("JournalScreen")}
                style={styles.drawerItem}>
                {t("screensJournal")}
            </Text>
            <Text
                onPress={() => navigation.navigate("SkillsScreen")}
                style={styles.drawerItem}>
                {t("screensSkills")}
            </Text>
            <Text
                onPress={() => navigation.navigate("SpellbookScreen")}
                style={styles.drawerItem}>
                {t("screensSpellbook")}
            </Text>
        </View>
    );
};


export default withTranslation("translations")(NavDrawer);