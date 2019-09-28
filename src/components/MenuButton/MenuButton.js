// Base imports
// eslint-disable-next-line no-unused-vars
import React from "react";

// UI
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

// Styles
import { MenuButtonStyles as styles } from "./styles";


const MenuButton = ({ navigation }) => {
    return (
        <TouchableOpacity  onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" type="material" containerStyle={styles.icon} />
        </TouchableOpacity>
    );
};


export default MenuButton;