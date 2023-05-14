import { StyleSheet } from "react-native"
import { SIZES, COLORS, FONTS } from '../../constants'

export const styles = StyleSheet.create({
    inputContainer: {
        marginTop: SIZES.extraLarge,
        paddingHorizontal: SIZES.font,
        borderRadius: SIZES.font,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    inputStyle: {
        flex: 1, 
        color: COLORS.darkGray,
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuRegular,
    }
})