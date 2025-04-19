import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { navigationRef } from './src/navigation/rootNavigation';
import CartScreen from './src/screens/Cart/CartScreen';
import DetailScreen from './src/screens/Detail/DetailScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import { Ionicons } from './src/shared/Icons/vectorIcons';
import { store } from './src/store/store';
import { COLORS } from './src/theme/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Create your tab navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.black_100,
        tabBarInactiveTintColor: COLORS.gray_100,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.white}
      />
      <Provider  store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </GestureHandlerRootView>
  );
}

export default App;