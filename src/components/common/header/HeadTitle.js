import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SIZES, FONTS, icons } from '../../../constants'

const HeadTitle = ({ textColor, titleText, handlePress }) => {
    return (
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: SIZES.extraLarge
        }}>
            <Text style={{
                fontSize: SIZES.large,
                fontFamily: FONTS.ubuntuMedium,
                color: textColor,
            }}>{titleText}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Image 
                    source={icons.option}
                    resizeMode='contain'
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeadTitle