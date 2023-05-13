import { View, Text } from 'react-native'
import { SIZES, FONTS } from '../../../constants'

const HeadTitle = ({ textColor, titleText }) => {
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
            <Text style={{
                fontSize: SIZES.large,
                fontFamily: FONTS.ubuntuBold,
                color: textColor,
                letterSpacing: 1,
            }}>...</Text>
        </View>
    )
}

export default HeadTitle