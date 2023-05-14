import { View, SafeAreaView, FlatList } from 'react-native'

import { FocusedStatusBar, MainHeader, SelectFilter, ComicCard2 } from '../components'
import { COLORS, COMICSDATA, SIZES } from '../constants'

const Comics = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <FocusedStatusBar backgroundColor={COLORS.secondary} barStyle="dark-content" />

            <View style={{ padding: SIZES.large, width: '100%' }}>
                <MainHeader />
                <SelectFilter />
            </View>

            <View style={{ 
                flex: 1, 
                paddingHorizontal: SIZES.large, 
                paddingTop: SIZES.extraLarge, 
                width: '100%' 
            }}>
                <FlatList 
                    data={COMICSDATA}
                    renderItem={({ item }) => <ComicCard2 data={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View tyle={{ padding: SIZES.large, width: '100%' }}>

            </View>
        </SafeAreaView>
    )
}

export default Comics