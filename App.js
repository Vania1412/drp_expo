// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import AchievedGoals from './screens/AchievedGoalsPage';
import DetailsGoal from './screens/DetailsGoalPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AchievedGoals" component={AchievedGoals} />
        <Stack.Screen name="DetailsGoal" component={DetailsGoal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
