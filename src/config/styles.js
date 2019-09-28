import { StyleSheet } from "react-native";


export const AppColors = {
    // Drawer
    drawerBackground: "#F6F6F6",
    drawerTitle: "#333333",

    // Header
    headerBorder: "transparent",

    // Screens
    screenBackground: "#F5FCFF",

    // Misc
    imageBorder: "#CDCDCD"
};

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.screenBackground,
    },
    header: {
        borderColor: AppColors.headerBorder,
        elevation: 0
    }
});