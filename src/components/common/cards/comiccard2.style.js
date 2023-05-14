import { StyleSheet } from "react-native"
import { COLORS, FONTS, SHADOWS, SIZES } from "../../../constants"

export const styles = StyleSheet.create({
    ComicCard: {
        backgroundColor: COLORS.white,
        marginBottom: SIZES.large,
        flexDirection: 'row',
        paddingVertical: SIZES.base * 2,
        paddingHorizontal: SIZES.base * 2,
        borderRadius: SIZES.extraLarge,
        width: '100%',
        ...SHADOWS.light,
    },
    comicImage: {
        width: 90,
        height: 130,
        borderRadius: SIZES.large,
        marginRight: SIZES.small,
    },
    cardDetail: {
        flex: 1,
    },
    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.base + 2,
    },
    cardTitle: {
        fontSize: SIZES.font + 2,
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
        marginBottom: SIZES.base,
    },
    downloadButton: {
        width: 20,
        height: 20,
    },
    buttonImage: {
        width: '100%',
        height: '100%',
    },
    cardSubInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.base + 2,
    },
    nextChapter: {
        color: COLORS.gray,
        fontSize: SIZES.small,
        fontFamily: FONTS.ubuntuRegular,
        maxWidth: 150,
    },
    viewsCount: {
        color: COLORS.gray,
        fontSize: SIZES.small,
        fontFamily: FONTS.ubuntuRegular,
        maxWidth: 150,
    },
})