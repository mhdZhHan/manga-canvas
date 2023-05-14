import { View, Text, Image } from 'react-native'
import { styles } from './profiledetails.style'

import Separator from '../common/Separator'
import { RectButton } from '../common/button/Buttons'
import { COLORS, SIZES, icons, images, SHADOWS } from '../../constants'

const ProfileDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image 
                    source={images.profile02}
                    resizeMode='contain'
                    style={styles.profileImage}
                />

                <View>
                    <Text style={styles.profileName}>Mohammed</Text>

                    <View style={styles.ratingContainer}>
                        <Image 
                            source={icons.star}
                            resizeMode='contain'
                            style={styles.starIcon}
                        />

                        <Text style={styles.ratingText}>4.4/5</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>
                    When I was born.. Devil said, "Oh shit...! Competition".
                </Text>
            </View>

            <Separator 
                width="100%" 
                borderWidth={.5} 
                borderColor={COLORS.gray} 
                marginVertical={SIZES.large + 4}
            />

            <View style={styles.infoContainer}>
                <View style={styles.infoWrapper}>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>10</Text>
                        <Text style={styles.infoLabelText}>Back</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>436</Text>
                        <Text style={styles.infoLabelText}>Followers</Text>
                    </View>
                </View>

                <RectButton 
                    title="Follow"
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                />
            </View>
        </View>
    )
}

export default ProfileDetails