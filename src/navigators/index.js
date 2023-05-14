import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Comics, Home, Profile } from "../screens"

const Stack = createNativeStackNavigator()

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent',
	}
}

const Navigators = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Comics" component={Comics} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators
