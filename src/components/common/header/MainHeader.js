import { Fragment } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './mainheader.style'

import { CircleButton } from '../button/Buttons'
import { SIZES, icons, images } from '../../../constants'

const MainHeader = () => {
    return (
        <Fragment>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image 
                        style={styles.profileImage}
                        resizeMode='contain'
                        source={images.profile02}
                    />
                    <View style={styles.notificationCount}>
                        <Text style={styles.notifivationText}>2</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.infoContainer}>
                    <Text style={styles.labeltext}>Hello,</Text>
                    <Text style={styles.nameText}>Mohammed</Text>
                </View>
            </View>

            <CircleButton 
                imgUrl={icons.menu} 
                top={SIZES.large * 2 + 3} 
                right={SIZES.large} 
            />
        </Fragment>
    )
}

export default MainHeader