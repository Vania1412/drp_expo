import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
    setShowMenu(false); // Close the menu after navigation
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>
      {showMenu && (
        <View style={styles.menuOptions}>
          <Button title="Home" onPress={() => navigateTo('Home')} />
          <Button title="Achieved Goals" onPress={() => navigateTo('AchievedGoals')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  menuButton: {
    backgroundColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 45,
    borderRadius: 4,
  },
  menuButtonText: {
    fontSize: 20,
  },
  menuOptions: {
    position: 'absolute',
    top: 24,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
});

export default Menu;
