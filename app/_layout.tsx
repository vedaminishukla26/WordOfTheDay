import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import StackNavigator from './config/StackNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import store from './config/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }} >
            <StackNavigator />
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
}
