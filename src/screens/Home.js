import { SafeAreaView, View, FlatList } from 'react-native'

import { FocusedStatusBar, ComicCard, 
    MainHeader, HeadTitle, HomeFooter, SearchBox } from '../components'

import { COLORS, COMICSDATA, SIZES } from '../constants'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <FocusedStatusBar backgroundColor={COLORS.secondary} barStyle='dark-content' />

            <View style={{ padding: SIZES.large, width: '100%' }}>
                <MainHeader navigation={navigation} />
                <SearchBox />
            </View>

            <View style={{ padding: SIZES.large, marginVertical: SIZES.large }}>
                <HeadTitle 
                    textColor={COLORS.darkGray} 
                    titleText="Trending Comic" 
                    handlePress={() => navigation.navigate('Comics')}
                />

                <FlatList 
                    data={COMICSDATA}
                    renderItem={({ item, index }) => 
                        <ComicCard 
                            data={item} 
                            index={index} 
                            arrLength={COMICSDATA.length} 
                            type="normal"
                    />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Top authors section */}
            <View style={{ flex: 1 }}>
                <HomeFooter />
            </View>
        </SafeAreaView>
    )
}

export default Home