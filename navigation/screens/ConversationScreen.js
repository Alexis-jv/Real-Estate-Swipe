import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConversationScreen = () => {
  const [activeMenu, setActiveMenu] = useState('seeker');

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeMenu === 'seeker' && styles.activeMenuItem,
          ]}
          onPress={() => handleMenuChange('seeker')}
        >
          <Text
            style={[
              styles.menuText,
              activeMenu === 'seeker' && styles.activeMenuText,
            ]}
          >
            Likes & chats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeMenu === 'provider' && styles.activeMenuItem,
          ]}
          onPress={() => handleMenuChange('provider')}
        >
          <Text
            style={[
              styles.menuText,
              activeMenu === 'provider' && styles.activeMenuText,
            ]}
          >
            Your homes
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {activeMenu === 'seeker' && (
          <View>
            {/* Afficher la liste des logements likés */}
            <Text>"Liked" homes</Text>
            {/* Afficher la liste des tchats en cours */}
            <Text>Current chats</Text>
          </View>
        )}

        {activeMenu === 'provider' && (
          <View>
            {/* Afficher la liste des logements publiés par l'utilisateur */}
            <Text>Published homes</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  menuContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  activeMenuItem: {
    borderBottomColor: 'blue',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  activeMenuText: {
    color: 'blue',
  },
  contentContainer: {
    flex: 1,
  },
});

export default ConversationScreen;
