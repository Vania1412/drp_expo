import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

// Import the default placeholder profile picture. Copyright-free from the web.
const profilePic = require('./assets/icon.png');

function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trip To Italy</Text>
        <Text style={styles.text}>23 users saving for this goal</Text>
        <Text style={styles.text}>64 users achieved this goal</Text>
        <Text style={styles.text}>Users expected to achieve within a similar timeframe as you:</Text>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Text style={styles.profileName}>George</Text>
            <Image source={profilePic} style={styles.profilePic} />
            <Button title="Follow" onPress={() => {}} />
          </View>
          <View style={styles.profile}>
            <Text style={styles.profileName}>Ivy</Text>
            <Image source={profilePic} style={styles.profilePic} />
            <Button title="Follow" onPress={() => {}} />
          </View>
        </View>
        <Text style={styles.subtitle}>Featured Stories & Tips</Text>
        <View style={styles.profileTip}>
          <Image source={profilePic} style={styles.profilePicTip} />
          <Text style={styles.profileNameTip}>Tim</Text>
        </View>
        <Text style={styles.text}>Buy round-trip tickets as soon as you know the starting date of your trip. Always keep track of the ticket price!</Text>
        <View style={styles.profileTip}>
          <Image source={profilePic} style={styles.profilePicTip} />
          <Text style={styles.profileNameTip}>Olivia</Text>
        </View>
        <Text style={styles.text}>If you are going to Firenze, try Trattoria Dall'oste!! It's so delicious, definitely worth the price.</Text>
        <Text style={styles.link}>Read More Stories & Tips</Text>
        <Text style={styles.subtitle}>Memory Collection</Text>
        <View>
          <Text style={styles.text}>John</Text>
          <Text style={styles.text}>Freya</Text>
          <Text style={styles.text}>Isabella</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  profile: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  profileName: {
    fontSize: 16,
    marginBottom: 5,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileTip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  profilePicTip: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  profileNameTip: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});

export default App;
