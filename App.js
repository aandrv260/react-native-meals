import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FavouritesContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import reduxStore from './store/redux/index';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const generalScreenStyles = {};

function TabsNavigator() {
  return (
    <BottomTabs.Navigator
      backBehavior="history"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#351401',
        tabBarInactiveTintColor: '#351401',
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: '#e2b497',
        },
      }}
    >
      <BottomTabs.Screen name="Categories" component={CategoriesScreen} />
      <BottomTabs.Screen name="Favourites" component={FavouritesScreen} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <FavouritesContextProvider>
        <Provider store={reduxStore}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: 'center',
                animation: 'slide_from_right',
                headerStyle: {
                  backgroundColor: '#351401',
                },
                headerTintColor: '#fff',
                contentStyle: {
                  backgroundColor: '#3f2f25',
                },
              }}
            >
              <Stack.Screen
                name="MealsCategories"
                component={TabsNavigator}
                options={{ headerShown: false }}
              />

              <Stack.Screen name="MealsOverview" component={MealsOverview} />
              <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 40,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
