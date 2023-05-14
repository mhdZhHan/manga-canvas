import { View } from 'react-native'

export default function Separator({ height, width, ...props }) {
    return (
        <View style={{ height: height, width: width, ...props }} />
    )
}

Separator.defaultProps = {
    height: 0,
    width: 0,
}
