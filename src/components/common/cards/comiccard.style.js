import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../../constants"

export const styles = StyleSheet.create({
    cardContainer: (index, length, grid=false) => ({
        flex: grid ? 1 : 0,
        margin: grid ? SIZES.large : 0,
        marginRight: index < length -1 && !grid ? SIZES.large : grid ? SIZES.large : 0,
    }),
    cardImage: (grid) => ({
        width: grid ? '100%' : 150,
        height: grid ? 250 : 200,
        borderRadius: SIZES.large,
        marginBottom: SIZES.font,
    }),
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