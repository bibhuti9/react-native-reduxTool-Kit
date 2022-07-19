import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import Products from './components/Products';
import { products } from './data'
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView>
          {
            products.map((value, _) => {
              return (
                <Products key={_} value={value} />
              )
            })
          }
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  )
}