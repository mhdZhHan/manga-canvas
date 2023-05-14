import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './selectfilter.style'

import { icons } from '../../constants'

const SelectFilter = () => {
    return (
        <View style={styles.selectContainer}>
            <Text style={styles.selectedText}>All comic</Text>
            <TouchableOpacity style={styles.arrowButton}>
                <Image 
                    source={icons.downArrow}
                    resizeMode='contain'
                    style={styles.downArrowIcon}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SelectFilter