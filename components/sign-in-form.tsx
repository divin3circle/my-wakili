import { SocialConnections } from '@/components/social-connections';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import * as React from 'react';
import { ActivityIndicator, Pressable, type TextInput, View } from 'react-native';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth"

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordInputRef = React.useRef<TextInput>(null);

  function onEmailSubmitEditing() {
    passwordInputRef.current?.focus();
  }

  async function onSubmit() {
    console.warn("email", email)
    console.warn("password", password)
    setLoading(true);
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      alert("Login successful!")
    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setLoading(false);
    }


  }

  return (
    <View className="gap-6">
      <Card className="shadow-none rounded-none border-background">
        <CardHeader>
          <CardTitle className="text-center text-xl sm:text-left" style={{
            fontFamily: "Nunito"
          }}>Sign in to My Wakili</CardTitle>
          <CardDescription className="text-center sm:text-left" style={{
            fontFamily: "Nunito"
          }}>
            Glad to see you back! Please sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6">
          <View className="gap-6">
            <View className="gap-1.5">
              <Label htmlFor="email" style={{
                fontFamily: "Nunito"
              }}>Email</Label>
              <Input
                id="email"
                placeholder="sylusabel@icloud.com"
                keyboardType="email-address"
                autoComplete="email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                onSubmitEditing={onEmailSubmitEditing}
                returnKeyType="next"
                submitBehavior="submit"
                style={{
                  fontFamily: "Nunito"
                }}
              />
            </View>
            <View className="gap-1.5">
              <View className="flex-row items-center">
                <Label htmlFor="password" style={{
                  fontFamily: "Nunito"
                }}>Password</Label>
                <Button
                  variant="link"
                  size="sm"
                  className="web:h-fit ml-auto h-4 px-1 py-0 sm:h-4"
                  onPress={() => {
                    // TODO: Navigate to forgot password screen
                  }}>
                  <Text className="font-normal leading-4" style={{
                    fontFamily: "Nunito"
                  }}>Forgot your password?</Text>
                </Button>
              </View>
              <Input
                ref={passwordInputRef}
                id="password"
                secureTextEntry
                returnKeyType="send"
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={onSubmit}
              />
            </View>
            <Button className="w-full flex items-center justify-center flex-col" onPress={onSubmit}>
              {
                loading ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <Text style={{
                    fontFamily: "Nunito"
                  }}>Continue</Text>
                )
              }
            </Button>
          </View>
          <View className="text-center text-sm flex flex-row gap-1 items-center justify-center">
            <Text className='text-center text-sm' style={{
              fontFamily: "Nunito"
            }}>
              Don&apos;t have an account?{' '}
            </Text>
            <Pressable
              onPress={() => {
                // TODO: Navigate to sign up screen
              }}>
              <Text className="text-sm underline" style={{
                fontFamily: "Nunito"
              }}>Sign up</Text>
            </Pressable>
          </View>
          <View className="flex-row items-center">
            <Separator className="flex-1" />
            <Text className="text-muted-foreground px-4 text-sm" style={{
              fontFamily: "Nunito"
            }}>or</Text>
            <Separator className="flex-1" />
          </View>
          <SocialConnections />
        </CardContent>
      </Card>
    </View>
  );
}
