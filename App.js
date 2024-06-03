// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import DetailsGoalPage from './screens/DetailsGoalPage';
import AchievedGoalsPage from './screens/AchievedGoalsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="DetailsGoal" component={DetailsGoalPage} />
        <Stack.Screen name="AchievedGoals" component={AchievedGoalsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

