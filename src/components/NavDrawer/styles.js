import { StyleSheet } from "react-native";
import { AppColors } from "../../config/styles";


export const NavDrawerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.drawerBackground,
        paddingTop: 40,
        paddingHorizontal: 20
    },
    drawerItem: {
        fontSize: 18,
        fontWeight: "bold",
        color: AppColors.drawerTitle,
        padding: 15,
        margin: 5,
        textAlign: "left"
    }
});