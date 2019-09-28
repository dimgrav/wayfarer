import { StyleSheet } from "react-native";
import { AppStyles, AppColors } from "../../config/styles";


export const PortraitStyles = StyleSheet.create({
    container: {
        ...AppStyles.container
    },
    portrait: {
        width: 100,
        height: 100,
        margin: 16,
        borderRadius: 12,
        borderWidth: 4,
        borderColor: AppColors.imageBorder
    }
});