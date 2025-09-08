import { ScrollView, View, Text } from 'react-native';
import { SignInForm } from '@/components/sign-in-form';
import { useColorScheme } from '@/hooks/useColorScheme';
import { THEME } from '@/lib/theme';

export default function Index() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={{
        backgroundColor: colorScheme === "dark" ? THEME.dark.background : THEME.light.background,
      }}
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
      keyboardDismissMode="interactive">
      <View className="w-full max-w-sm">
        <SignInForm />
      </View>
      <View className='mt-12'>
        <Text className="font-xs text-muted-foreground"
          style={{
            fontFamily: "Nunito"
          }}
        >
          By siging into My Wakili App you agree to the terms of use outlined here.
        </Text>
      </View>
    </ScrollView>
  );
}
