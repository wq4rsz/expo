import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ lang, experience }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
      style={styles.logo}
      source={{ uri: 'https://via.placeholder.com/50' }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.language}>{lang}</Text>
        <Text style={styles.experience}>Опыт: {experience} лет</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  language: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: 'gray',
  },
});

export default LanguageItem;