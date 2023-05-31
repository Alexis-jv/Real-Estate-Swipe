

import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { ThemeContext } from './ThemeContext';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((prevValue) => !prevValue);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled((prevValue) => !prevValue);
  };

  useEffect(() => {
    // Do something when the dark mode value changes
  }, [darkModeEnabled]);

  return (
    <View style={[styles.container, darkModeEnabled && styles.darkContainer]}>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
          thumbColor={darkModeEnabled ? '#fff' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={handleDarkModeToggle}
          thumbColor={darkModeEnabled ? '#fff' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, darkModeEnabled && styles.darkText]}>Account Settings</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, darkModeEnabled && styles.darkText]}>Privacy Settings</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage Privacy Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  darkText: {
    color: '#fff',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#81b0ff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
