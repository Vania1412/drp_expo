import React from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from '../components/Menu'; // Import the Menu component

const HomePage = () => {
  const navigation = useNavigation();
  const [goals, setGoals] = React.useState([
    // Sample data for goals
    { id: '1', title: 'Trip to Italy', progress: 50, cost: 500},
  ]);
  const [newGoal, setNewGoal] = React.useState('');
  const [saving, setSaving] = React.useState('');

  const addGoal = () => {
    if (newGoal.trim() && saving.trim()) {
      setGoals([...goals, { id: String(goals.length + 1), title: newGoal, progress: 0, cost: parseFloat(saving) }]);
      setNewGoal('');
      setSaving('');
    }
  };

  return (
    <View style={styles.container}>
      <Menu />  
      <View style={styles.header}>
        <Text style={styles.headerText}>Expected saving per month: £32{"\n"}Current saving: £250</Text>
        <Text style={styles.headerText}>Wendy237</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter savings"
        value={saving}
        onChangeText={setSaving}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter new goal"
        value={newGoal}
        onChangeText={setNewGoal}
      />
      <Button title="Add Goal" onPress={addGoal} />
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.goalItem} onPress={() => navigation.navigate('DetailsGoal', { goal: item })}>
            <Text style={styles.goalText}>{item.title} - {item.progress}%       £{item.cost}</Text>
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 25,
  },
  headerText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  goalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  goalText: {
    fontSize: 18,
  },
});

export default HomePage;
