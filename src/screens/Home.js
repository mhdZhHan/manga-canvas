import { useRef } from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import { Modalize } from 'react-native-modalize'

import { FocusedStatusBar, ComicCard, 
    MainHeader, HeadTitle, HomeFooter, SearchBox, BottomSheet } from '../components'

import { COLORS, COMICSDATA, SIZES } from '../constants'
import { Display } from '../utils'

const Home = ({ navigation }) => {
    const modalizeRef = useRef(null)

    const openModalize = () => {
      modalizeRef.current?.open();
    }
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
                <HomeFooter openModalize={openModalize} />
            </View>

            <Modalize 
                ref={modalizeRef}
                snapPoint={500}
                modalHeight={500}
                modalStyle={{
                    width: Display.setWidth(85),
                    height: Display.setHeight(60),
                    alignSelf: 'center',
                    backgroundColor: COLORS.white,
                }}
                >
                <BottomSheet />
            </Modalize>
        </SafeAreaView>
    )
}

export default Home