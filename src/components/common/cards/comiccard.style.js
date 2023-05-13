import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../../constants"

export const styles = StyleSheet.create({
    cardContainer: (index, length) => ({
        marginRight: index < length -1 ? SIZES.large : 0
    }),
    cardImage: {
        width: 150,
        height: 200,
        borderRadius: SIZES.large,
        marginBottom: SIZES.font,
    },
    cardTitle: {
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuBold,
        color: COLORS.darkGray,
        marginBottom: SIZES.base / 2,
        maxWidth: 150,
    },
    cardAuthor: {
        color: COLORS.gray,
        fontSize: SIZES.small,
        fontFamily: FONTS.ubuntuRegular,
        maxWidth: 150,
    },
})