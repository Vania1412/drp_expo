// pages/AchievedGoals.js
import React from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const AchievedGoals = () => {
  const [achievedGoals, setAchievedGoals] = React.useState([
    // Sample data for achieved goals
    { id: '1', title: 'Trip to Italy', expectedSpending: 1500, actualSpending: 1400, daysSaved: 365 },
    { id: '2', title: 'New Laptop', expectedSpending: 1000, actualSpending: 950, daysSaved: 180 },
  ]);

  return (
    <View style={styles.container}>
      <Menu />
      <FlatList
        data={achievedGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.title}</Text>
            <Text style={styles.goalDetail}>Expected spending: £{item.expectedSpending}</Text>
            <Text style={styles.goalDetail}>Actual spending: £{item.actualSpending}</Text>
            <Text style={styles.goalDetail}>Saved for {item.daysSaved} days</Text>
            <TextInput
              style={styles.input}
              placeholder="Add Memorable Moments"
              onChangeText={(text) => item.memorableMoments = text}
            />
            <Button title="Share Stories and Tips" onPress={() => { /* Logic to share stories and tips */ }} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  goalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  goalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  goalDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default AchievedGoals;
