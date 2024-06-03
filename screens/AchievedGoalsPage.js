// AchievedGoalsPage.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Modal } from 'react-native';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';

const AchievedGoalsPage = () => {
  const [achievedGoals, setAchievedGoals] = useState([]);
  const [successMessage, setMessage] = useState('');

  useEffect(() => {
    const fetchAchievedGoals = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'achieved_goals'));
      const goalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAchievedGoals(goalsData);
    };
    fetchAchievedGoals();
  }, []);

  const handleShare = async (itemId, text, originalText) => {
    if (text != undefined && text != originalText) {
      try {
        await updateDoc(doc(firestore, 'achieved_goals', itemId), {
          'S&T': text
        });
        setAchievedGoals(prevGoals => prevGoals.map(goal => {
          if (goal.id === itemId) {
            return { ...goal, 'S&T': text };
          }
          return goal;
        }));
      } catch (error) {
        console.error('Error sharing Stories & Tips:', error);
      }
      if (text != '') {
        setMessage('Shared successfully!');
        setTimeout(() => {
          setMessage('');
        }, 2000);
      } else {
        setMessage('Deleted successfully!');
        setTimeout(() => {
          setMessage('');
        }, 2000);
      }
    } else {
      setMessage('Please modify.');
      setTimeout(() => {
        setMessage('');
      }, 2000);

    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={achievedGoals}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Title: {item.Title}</Text>
            <Text style={styles.goalText}>Expected Costs: £{item['Expected Costs']}</Text>
            <Text style={styles.goalText}>Actual Costs: £{item['Actual Costs']}</Text>
            <Text style={styles.goalText}>Saving Days: {item['Saving Days']}</Text>
            <Text style={styles.goalText}>Shared Stories & Tips:</Text>
            {item['S&T'] ? (
              <View>

                <TextInput
                  style={styles.input}
                  defaultValue={item['S&T']}
                  onChangeText={(text) => {
                    const updatedGoals = achievedGoals.map(goal => {
                      if (goal.id === item.id) {
                        return { ...goal, st: text };
                      }
                      return goal;
                    });
                    setAchievedGoals(updatedGoals);
                  }}

                />
                <Button
                  title="Update"
                  onPress={() => handleShare(item.id, item.st, item['S&T'])}
                />

              </View>
            ) : (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Any Stories and Tips?"
                  onChangeText={(text) => item.st = text}
                />
                <Button
                  title="Share"
                  onPress={() => handleShare(item.id, item.st, '')}
                />
              </View>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Modal
        visible={!!successMessage}
        transparent={true}
      >
        <View style={styles.modal}>
          <Text style={styles.modalText}>{successMessage}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  goalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  goalText: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 8,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AchievedGoalsPage;
