import { View, Text, Image } from 'react-native'
import { styles } from './comiccard.style'

const ComicCard = ({ data, index, arrLength }) => {
    return (
        <View style={styles.cardContainer(index, arrLength)}>
            <Image 
                source={data.image}
                resizeMode='cover'
                style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Trending Comix</Text>
            <Text style={styles.cardAuthor}>Good morning</Text>
        </View>
    )
}

export default ComicCard