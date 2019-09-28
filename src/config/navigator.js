// Base imports
// eslint-disable-next-line no-unused-vars
import React from "react";

// Navigation
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { MenuButton, NavDrawer } from "../components/index";

// Screens
import * as Screens from "../screens/index";

// Styles
import { AppStyles } from "../config/styles";


const AppDrawer = createDrawerNavigator(
    // routes
    {
        CharacterScreen: {
            screen: Screens.Character
        },
        BackpackScreen: {
            screen: Screens.Backpack
        },
        JournalScreen: {
            screen: Screens.Journal
        },
        SkillsScreen: {
            screen: Screens.Skills
        },
        SpellbookScreen: {
            screen: Screens.Spellbook
        },
    },
    // options
    {
        contentComponent: NavDrawer,
        initialRouteName: "CharacterScreen"
    }
);

const AppNavigator = createStackNavigator(
    // route stacks
    {
        rootStack: {
            screen: AppDrawer,
            navigationOptions: ({ navigation }) =>  ({
                headerLeft: <MenuButton navigation={navigation} />,
                headerStyle: AppStyles.header
            })
        }
    },
    // options
    {
        initialRouteName: "rootStack"
    }
);


export default AppNavigator;