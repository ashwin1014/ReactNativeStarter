import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {TouchableWithoutFeedback, Keyboard, View, Text} from 'react-native';

import MainNavigation from './Navigation/MainNavigation';

const App = () => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
         }}>
         <NavigationContainer>
            <MainNavigation />
         </NavigationContainer>
        </TouchableWithoutFeedback>
    );
};

export default App;