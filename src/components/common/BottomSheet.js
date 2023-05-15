import { View, Text, TouchableOpacity, Image, } from 'react-native'
import { styles } from './bottomsheet.style'

import { images, icons } from '../../constants'
import { useState } from 'react'

const BottomSheet = () => {
    const [selectedOption, setSelectedOption] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
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

                <TouchableOpacity style={styles.arrowButton}>
                    <Image 
                        source={icons.downArrow}
                        resizeMode='contain'
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.optionContainer}>
                <TouchableOpacity style={styles.option(selectedOption)}>
                    <Image 
                        source={icons.love}
                        resizeMode='contain'
                        style={styles.optionIcon}
                    />

                    <Text style={styles.optionName(selectedOption)}>favorite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option()}>
                    <Image 
                        source={icons.settings}
                        resizeMode='contain'
                        style={styles.optionIcon}
                    />

                    <Text style={styles.optionName()}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option()}>
                    <Image 
                        source={icons.notification}
                        resizeMode='contain'
                        style={styles.optionIcon}
                    />

                    <Text style={styles.optionName()}>Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option()}>
                    <Image 
                        source={icons.menu}
                        resizeMode='contain'
                        style={styles.optionIcon}
                    />

                    <Text style={styles.optionName()}>Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option()}>
                    <Image 
                        source={icons.menu}
                        resizeMode='contain'
                        style={styles.optionIcon}
                    />

                    <Text style={styles.optionName()}>Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option()}>
                    <Image 
                        source={icons.menu}
                        resizeMode='contain'
                        style={styles.optionIcon}
                    />

                    <Text style={styles.optionName()}>New stuff</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomSheet