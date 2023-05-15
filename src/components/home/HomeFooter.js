import { Fragment } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { styles } from './homefooter.style'

import HeadTitle from '../common/header/HeadTitle'
import { icons, images, COLORS } from '../../constants'

const TopAuthors = () => {
    return (
        <View style={styles.topContainer}>
            <HeadTitle 
                textColor={COLORS.darkGray} 
                titleText="Top Authors" 
            />

            <ScrollView 
                horizontal 
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.authorContainer(1)}>
                    <TouchableOpacity>
                        <Image 
                            style={styles.authorImage}
                            source={images.profile01}
                        />
                    </TouchableOpacity>
                    <Text style={styles.authorName}>Miller</Text>
                </View>
                <View style={styles.authorContainer(1)}>
                    <TouchableOpacity>
                        <Image 
                            style={styles.authorImage}
                            source={images.profile03}
                        />
                    </TouchableOpacity>
                    <Text style={styles.authorName}>Miller</Text>
                </View>
                <View style={styles.authorContainer(1)}>
                    <TouchableOpacity>
                        <Image 
                            style={styles.authorImage}
                            source={images.profile04}
                        />
                    </TouchableOpacity>
                    <Text style={styles.authorName}>Miller</Text>
                </View>
                <View style={styles.authorContainer(1)}>
                    <TouchableOpacity>
                        <Image 
                            style={styles.authorImage}
                            source={images.profile05}
                        />
                    </TouchableOpacity>
                    <Text style={styles.authorName}>Miller</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const UserBox = ({ openModalize }) => {
    return (
        <View style={styles.bottomContainer}>
            <HeadTitle 
                textColor={COLORS.secondary} 
                titleText="Continue reading" 
            />

            <View style={styles.userBox}>
                <View style={styles.userBoxLeft}>
                    <Image 
                        source={images.profile04}
                        resizeMode='contain'
                        style={styles.userImage}
                    />
                    <View style={styles.info}>
                        <Text style={styles.username}>Martin peak</Text>
                        <Text style={styles.chapterCount}>Chapter 201</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.arrowButton} onPress={openModalize}>
                    <Image 
                        source={icons.downArrow}
                        resizeMode='contain'
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const HomeFooter = ({ openModalize }) => {
    return (
        <Fragment>
            <TopAuthors />
            <UserBox openModalize={openModalize} />
        </Fragment>
    )
}

export default HomeFooter