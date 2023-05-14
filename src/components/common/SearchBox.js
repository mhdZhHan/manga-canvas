import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './searchbox.style'

import { SIZES, COLORS, icons } from '../../constants'

const SearchBox = () => {
    return (
        <View style={styles.inputContainer}>
            <Image 
                source={icons.search}
                resizeMode='contain'
                style={{ width: 20, height: 20, marginRight: SIZES.base }}
            />
            <TextInput 
                placeholder='Search comic...'
                placeholderTextColor={COLORS.gray}
                style={styles.inputStyle}
                onChangeText={() => {}}
            />
            <TouchableOpacity style={{ width: 20, height: 20, marginRight: SIZES.base }}>
                <Image 
                    source={icons.settings2}
                    resizeMode='contain'
                    style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBox