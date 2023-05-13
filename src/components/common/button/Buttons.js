import { TouchableOpacity, Image, Text } from "react-native"
import { COLORS, SIZES, SHADOWS, FONTS } from "../../../constants"

export const CircleButton = ({ imgUrl, handlepress, ...props }) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.small,
            ...props,
        }}
            onPress={handlepress}
        >
            <Image 
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    )
}