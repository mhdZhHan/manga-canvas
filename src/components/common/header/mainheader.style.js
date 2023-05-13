import { StyleSheet, StatusBar } from "react-native"
import { COLORS, SIZES, FONTS } from "../../../constants"

export const styles = StyleSheet.create({
    container: {
        padding: SIZES.large,
        width: '100%',
    },
    topContainer: {

    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 54,
        height: 54,
        marginRight: SIZES.extraLarge,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: SIZES.extraLarge,
    },
    notificationCount: {
        backgroundColor: '#E50B0A',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 5,
        left: 40,
        borderWidth: 1,
        borderColor: COLORS.white,
    },
    notifivationText: {
        color: 'white',
        fontSize: SIZES.base,
        fontFamily: FONTS.ubuntuBold,
    },
    infoContainer: {

    },
    labeltext: {
        color: COLORS.darkGray,
        fontSize: SIZES.font,
        fontFamily: FONTS.ubuntuRegular,
        marginBottom: SIZES.base / 2,
    },
    nameText: {
        color: COLORS.darkGray,
        fontSize: SIZES.large,
        fontFamily: FONTS.ubuntuBold,
    },
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