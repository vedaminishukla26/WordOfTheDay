import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../screens/HomePage'
import HistoryPage from '../screens/HistoryPage'

const Stack = createStackNavigator()

const StackNavigator : React.FC = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="History" component={HistoryPage} />
        </Stack.Navigator>
    )
}

export default StackNavigator