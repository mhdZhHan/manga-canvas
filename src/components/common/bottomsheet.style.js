import { StyleSheet } from "react-native"
import { SIZES, COLORS, FONTS } from '../../constants'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: SIZES.large,
    },
    userContainer: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.large,
        borderRadius: SIZES.extraLarge * 2,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    userBoxLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        width: 50,
        height: 50, 
        borderRadius: SIZES.extraLarge * 2,
        marginRight: SIZES.small,
    },
    info: {

    },
    username: {
        color: COLORS.darkGray,
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuMedium,
        marginBottom: SIZES.base / 2,
    },
    chapterCount: {
        color: COLORS.gray,
        fontSize: SIZES.small,
        fontFamily: FONTS.ubuntuMedium,
    },
    arrowButton: {

    },
    buttonIcon: {
        width: 25,
        height: 25,
    },


    optionContainer: {
        marginVertical: SIZES.extraLarge,
        marginHorizontal: SIZES.large,
        marginTop: SIZES.extraLarge + 10,
    },
    option: (selected) => ({
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.small,
        backgroundColor: selected ? COLORS.darkGray : COLORS.white,
        borderRadius: SIZES.large * 2,
        marginBottom: SIZES.small,
    }),
    optionIcon: {
        width: 25,
        height: 25,
        marginRight: 20,
    },
    optionName: (selected) => ({
        color: selected ? COLORS.white : COLORS.darkGray,
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuBold,
    }),
})