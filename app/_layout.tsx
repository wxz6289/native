import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
const { Screen } = Stack;

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>

  );
}
