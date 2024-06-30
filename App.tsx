import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { AuthContext } from 'src/context/AuthContext';

import { Loading } from '@components/Loading';

import { THEME } from 'src/theme';

import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />

      <AuthContext.Provider value={{
        user: {
          id: '',
          name: '',
          email: '',
          avatar: 'null',
        }
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}
