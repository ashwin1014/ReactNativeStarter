import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
    createDrawerNavigator,
  } from '@react-navigation/drawer';

  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  import Home from '@screens/Home/Home';

  const MainNavigation = () => {

    const HomeStack = ({navigation}) => (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
      </Stack.Navigator>
    );

    return (
      <Drawer.Navigator openByDefault initialRouteName="Home">
        <Drawer.Screen name="Home" children={HomeStack} />
      </Drawer.Navigator>
    )
  };

  export default MainNavigation;