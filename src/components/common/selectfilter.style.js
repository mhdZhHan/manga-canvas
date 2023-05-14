import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

export const styles = StyleSheet.create({
    selectContainer: {
        backgroundColor: COLORS.white,
        marginTop: SIZES.extraLarge,
        paddingHorizontal: SIZES.font,
        borderRadius: SIZES.font,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SIZES.large,
    },
    selectedText: {
        color: COLORS.darkGray,
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuRegular,
    },
    arrowButton: {
        width: 20,
        height: 20,
    },
    downArrowIcon: {
        width: '100%',
        height: '100%',
    },
})
