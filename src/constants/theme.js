const COLORS = {
    primary: "#FA866B",
    secondary: "#F5F5F5",
  
    white: "#FFF",
    gray: "#7B6F6F",
    darkGray: '#334148',
}

const FONTS = {
    ubuntuBold: 'Ubuntu-Bold',
    ubuntuBoldItalic: 'Ubuntu-BoldItalic',
    ubuntuItalic: 'Ubuntu-Italic',
    ubuntuLight: 'Ubuntu-Light',
    ubuntuLightItalic: 'Ubuntu-LightItalic',
    ubuntuMedium: 'Ubuntu-Medium',
    ubuntuMediumItalic: 'Ubuntu-MediumItalic',
    ubuntuRegular: 'Ubuntu-Regular',
}

const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
}

const SHADOWS = {
	small: {
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	medium: {
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5.84,
		elevation: 5,
	},

	light: {
		shadowColor: '#74858C',
		shadowOffset: {
		  width: 0,
		  height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	
		elevation: 3,
	},
	dark: {
		shadowColor: COLORS.gray,
		shadowOffset: {
		  width: 0,
		  height: 7,
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,
	
		elevation: 14,
	},
}

export { COLORS, FONTS, SIZES, SHADOWS }
