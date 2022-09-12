import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSreen from './screens/HomeSreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name == "Home") {
                iconName = focused ? "house" : "home";
              }
              else if (route.name == "Search") {
                iconName = focused ? "sort" : "search";
              }
              else if (route.name == "Add") {
                iconName = focused ? "loupe" : "add";
              }
              else if (route.name == "Activity") {
                iconName = focused ? "notifications" : "info";
              }
              else if (route.name == "Profile") {
                iconName = focused ? "portrait" : "person";
              }
              return <Icon name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name='Home' component={HomeSreen} />
          <Tab.Screen name='Search' component={SearchScreen} />
          <Tab.Screen name='Add' component={AddScreen} />
          <Tab.Screen name='Activity' component={ActivityScreen} />
          <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;