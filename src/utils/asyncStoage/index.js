import AsyncStorage from '@react-native-async-storage/async-storage';
import apputils from '../apputils';


const storeData = async (key, value) => {
  if (typeof value === 'string' || typeof value === 'object') {
    if (typeof value === 'string') {
      return AsyncStorage.setItem(key, value);
    }
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }
  throw new Error('value must be string or object');
};

const getData = async (key) => {
  try {
    const ItemStr = await AsyncStorage.getItem(key);
    if (apputils.isEmpty(ItemStr)) {
      throw new Error('value is empty');
    }
    return ItemStr;
  } catch (error) {
    throw new Error(error);
  }
};

const getObjDataByKey = async (key) => {
  let obj = {};
  try {
    const data = await getData(key);
    obj = JSON.parse(data);
    return obj;
  } catch (error) {
    throw new Error('data is not object');
  }
};

const removeData = (key) => AsyncStorage.removeItem(key);

const removeAll = () => { AsyncStorage.clear(); };

export default {
  storeData,
  getData,
  getObjDataByKey,
  removeData,
  removeAll,
};
