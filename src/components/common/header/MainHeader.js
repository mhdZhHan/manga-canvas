import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './mainheader.style'

import { CircleButton } from '../button/Buttons'
import { COLORS, SIZES, icons, images } from '../../../constants'

const MainHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.profileImage}
                            resizeMode='contain'
                            source={images.profile02}
                        />
                        <View style={styles.notificationCount}>
                            <Text style={styles.notifivationText}>2</Text>
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.labeltext}>Hello,</Text>
                        <Text style={styles.nameText}>Mohammed</Text>
                    </View>
                </View>
            </View>

            <CircleButton 
                imgUrl={icons.menu} 
                top={SIZES.large + 4} 
                right={SIZES.large} 
            />

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
        </View>
    )
}

export default MainHeader