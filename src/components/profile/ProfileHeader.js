import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './profileheader.style'

import { icons } from '../../constants'

const ProfileHeader = ({ pageName, navigation }) => {
  return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()}>
                <Image 
                    source={icons.leftArrow}
                    resizeMode='contain'
                    style={styles.backButtonIcon}
                />
            </TouchableOpacity>
            <Text style={styles.pageName}>{pageName}</Text>
            <TouchableOpacity style={styles.menuButton}>
                <Image 
                    source={icons.dotMenu}
                    resizeMode='contain'
                    style={styles.dotMenuIcon}
                />
            </TouchableOpacity>
        </View>
  )
}

export default ProfileHeader