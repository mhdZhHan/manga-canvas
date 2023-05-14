import { FlatList, SafeAreaView, TouchableOpacity, Image, View, Text, ScrollView } from 'react-native'

import { FocusedStatusBar, ProfileDetails, 
    ProfileHeader, HeadTitle, ComicCard } from '../components'
import { COLORS, COMICSDATA, SIZES } from '../constants'

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary, }}>
            <FocusedStatusBar backgroundColor={COLORS.secondary} barStyle="dark-content" />

            <View style={{ padding: SIZES.large }}>
                <ProfileHeader pageName="Detail Author" navigation={navigation} />
            </View>

            <View style={{ padding: SIZES.large }}>
                <ProfileDetails />
            </View>

            <View style={{ paddingHorizontal: SIZES.large, paddingTop: SIZES.large }}>
                <HeadTitle 
                    textColor={COLORS.darkGray} 
                    titleText="Comic"
                />
            </View>

            <View style={{ flex: 1 }}>
                    <FlatList 
                        data={COMICSDATA}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        renderItem={({ item, index })=> (
                            <ComicCard 
                                data={item} 
                                grid={true} 
                                index={index} 
                                arrLength={COMICSDATA.length} 
                            />
                        )}
                    />
            </View>
        </SafeAreaView>
    )
}

export default Profile