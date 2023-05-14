import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './comiccard2.style'

import { icons } from '../../../constants'

const ComicCard2 = ({ data }) => {
    return (
        <View style={styles.ComicCard}>
            <Image 
                source={data.image}
                resizeMode='cover'
                style={styles.comicImage}
            />

            <View style={styles.cardDetail}>
				<View style={styles.cardInfo}>
					<Text style={styles.cardTitle}>{data.title}</Text>
					
					<TouchableOpacity style={styles.downloadButton}>
						<Image 
							source={icons.cloudDwnld2}
							resizeMode='contain'
							style={styles.buttonImage}
						/>
					</TouchableOpacity>
				</View>

				<Text style={styles.cardAuthor}>{data.author}</Text>

				<View style={styles.cardSubInfo}>
					<Text style={styles.nextChapter}>Next chapter {data.nextChapter}</Text>
					<Text style={styles.viewsCount}>45k views</Text>
				</View>
            </View>
        </View>
    )
}

export default ComicCard2