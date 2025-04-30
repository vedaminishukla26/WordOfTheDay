import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../screens/HomePage'

const Stack = createStackNavigator()

const StackNavigator : React.FC = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
    )
}

export default StackNavigator