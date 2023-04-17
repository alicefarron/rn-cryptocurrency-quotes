import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import RateScreen from '@pages/rate';
import AboutScreen from '@pages/about';
import {styles, colors} from '@shared/styles';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute',
    alignItems: 'center',
  },
  tabBarInactiveTintColor: colors.lightBlue,
  tabBarActiveTintColor: colors.intensePurple,
  tabBarActiveBackgroundColor: colors.white,
  tabBarInactiveBackgroundColor: colors.white,
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          options={{
            headerTitle: 'О приложении',
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('../../assets/icons/about.png')}
                style={{width: size, height: size, opacity: focused ? 1 : 0.5}}
              />
            ),
          }}
          name="About"
          component={AboutScreen}
        />
        <Tab.Screen
          options={{
            headerTitle: 'Котировки',
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('../../assets/icons/cells.png')}
                style={{width: size, height: size, opacity: focused ? 1 : 0.5}}
              />
            ),
          }}
          name="Rate"
          component={RateScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
