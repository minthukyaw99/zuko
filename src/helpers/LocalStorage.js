import { AsyncStorage } from 'react-native';

class LocalStorage {
  static async saveToLocalStorage(name, value) {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (error) {
      console.log('Zuko: could not save to local storage', name, value);
    }
  }


  static async getFromLocalStorage(name) {
    try {
      return await AsyncStorage.getItem(name) || null;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

export default LocalStorage;
