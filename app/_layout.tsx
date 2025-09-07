import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "../global.css"
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PortalHost } from "@rn-primitives/portal"
import { useFonts } from 'expo-font';


export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Nunito: require('../assets/fonts/Nunito-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack />
      <PortalHost />
    </ThemeProvider>
  );
}
