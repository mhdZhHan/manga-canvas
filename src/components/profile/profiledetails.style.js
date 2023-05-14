import { StyleSheet, StatusBar } from "react-native"
import { COLORS, SIZES, FONTS } from "../../constants"

export const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: SIZES.extraLarge * 2,
        marginRight: SIZES.large,
    },
    profileName: {
        color: COLORS.darkGray,
        fontSize: SIZES.large + 2,
        fontFamily: FONTS.ubuntuBold,
        marginBottom: SIZES.base / 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        width: 23,
        height: 23,
        marginRight: SIZES.base - 3,
    },
    ratingText: {
        color: COLORS.gray,
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuMedium,
    },

    bioContainer: {
        width: '100%',
        marginTop: SIZES.large,
    },
    bioText: {
        color: COLORS.darkGray,
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuBold,
        marginBottom: SIZES.base / 2,
    },


    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.base,
        paddingHorizontal: SIZES.small,
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        marginRight: SIZES.large * 2,
    },
    infoText: {
        color: COLORS.darkGray,
        fontSize: SIZES.extraLarge,
        fontFamily: FONTS.ubuntuBold,
        marginBottom: SIZES.base,
    },
    infoLabelText: {
        color: COLORS.gray,
        fontFamily: FONTS.ubuntuMedium,
        fontSize: SIZES.font,
    }
})