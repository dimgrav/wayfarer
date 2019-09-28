import { StyleSheet } from "react-native";
import { AppStyles } from "../../config/styles";


export const CharacterStyles = StyleSheet.create({
    container: {
        ...AppStyles.container
    },
    portraitContainer: {
        position: "absolute",
        start: 0,
        top: 0
    }
});