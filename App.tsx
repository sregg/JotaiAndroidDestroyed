/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import {MMKV} from 'react-native-mmkv';
import {useAtom, Provider as JotaiProvider} from 'jotai';

const COUNT_STORAGE_KEY = 'count';

export const mmkvStorage = new MMKV();

console.log('Outside of App');

const countAtom = atomWithStorage(
  COUNT_STORAGE_KEY,
  0,
  createJSONStorage(() => ({
    getItem: key => mmkvStorage.getString(key) ?? null,
    setItem: (key, value) => mmkvStorage.set(key, value),
    removeItem: key => mmkvStorage.delete(key),
  })),
);

const App = () => {
  console.log('Inside of App');
  return (
    <JotaiProvider>
      <Counter />
    </JotaiProvider>
  );
};

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Count: {count}</Text>
      <Text>
        Count from storage: {mmkvStorage.getString(COUNT_STORAGE_KEY)}
      </Text>
      <Button
        title="Increment"
        onPress={() => setCount(currCount => currCount + 1)}
      />
    </View>
  );
};

export default App;
