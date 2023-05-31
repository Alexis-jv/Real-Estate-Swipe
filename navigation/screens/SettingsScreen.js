import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

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
  }, [darkModeEnabled]);

  return (
    <View style={[styles.screen, darkModeEnabled && styles.darkScreen]}>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={handleDarkModeToggle} />
      </View>

      <Text style={[styles.sectionTitle, darkModeEnabled && styles.darkText]}>Account Settings</Text>
      {/* Add more settings options related to the user's account here */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  darkScreen: {
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
  },
  darkText: {
    color: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});