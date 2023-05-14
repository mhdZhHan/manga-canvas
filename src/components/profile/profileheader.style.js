import { StyleSheet } from "react-native"
import { COLORS, SIZES, FONTS } from "../../constants"

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.large,
    },
    backButton: {
        width: 20,
        height: 20,
    },
    backButtonIcon: {
        width: '100%',
        height: '100%',
    },
    pageName: {
        color: COLORS.darkGray,
        fontSize: SIZES.large,
        fontFamily: FONTS.ubuntuBold,
    },
    menuButton: {
        width: 20,
        height: 20,
    },
    dotMenuIcon: {
        width: '100%',
        height: '100%',
    },
})
