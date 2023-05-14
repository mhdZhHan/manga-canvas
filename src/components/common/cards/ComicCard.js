import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './comiccard.style'

const ComicCard = ({ data, index, arrLength, grid }) => {
    return (
        <View style={styles.cardContainer(index, arrLength, grid)}>
            <TouchableOpacity activeOpacity={.8}>
                <Image 
                    source={data.image}
                    resizeMode='cover'
                    style={styles.cardImage(grid)}
                />
            </TouchableOpacity>
            
            <Text style={styles.cardTitle}>Trending Comix</Text>
            <Text style={styles.cardAuthor}>Good morning</Text>
        </View>
    )
}

export default ComicCard