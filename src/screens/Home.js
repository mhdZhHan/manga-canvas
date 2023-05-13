import { SafeAreaView, View, FlatList, Text } from 'react-native'

import { FocusedStatusBar, ComicCard, MainHeader, HomeAuthors, HeadTitle } from '../components'
import { COLORS, COMICSDATA, SIZES } from '../constants'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <FocusedStatusBar backgroundColor={COLORS.secondary} barStyle='dark-content' />

            <MainHeader />

            <View style={{ flex: 1, padding: SIZES.large, marginVertical: SIZES.large }}>
                <HeadTitle 
                    textColor={COLORS.darkGray} 
                    titleText="Trending Comic" 
                />

                <FlatList 
                    data={COMICSDATA}
                    renderItem={({ item, index }) => <ComicCard data={item} index={index} arrLength={COMICSDATA.length} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Top authors section */}

            <View style={{ flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, }}>
                <HomeAuthors />
            </View>


        </SafeAreaView>
    )
}

export default Home