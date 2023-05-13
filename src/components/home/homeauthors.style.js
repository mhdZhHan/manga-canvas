import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

export const styles = StyleSheet.create({
    container: {

    },
    topContainer: {
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.extraLarge,
        paddingVertical: SIZES.extraLarge,
        borderTopRightRadius: SIZES.extraLarge,
        borderTopLeftRadius: SIZES.extraLarge,
    },
    listContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    authorContainer: (index) => ({
        marginRight: index < 4 ? SIZES.extraLarge : 0,
    }),
    authorImage: {
       width: 70,
       height: 70, 
       borderRadius: SIZES.extraLarge * 2,
    },
    authorName: {
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuRegular,
        color: COLORS.gray,
        textAlign: 'center',
        marginTop: SIZES.base,
    },


    bottomContainer: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.extraLarge,
        paddingVertical: SIZES.extraLarge,
        borderTopRightRadius: SIZES.extraLarge,
        borderTopLeftRadius: SIZES.extraLarge,
    },
    userBox: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SIZES.small,
        paddingHorizontal: SIZES.extraLarge,
        borderRadius: SIZES.extraLarge * 2,
    },
    userBoxLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        width: 60,
        height: 60, 
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
        width: 30,
        height: 30,
    },
})
