import { Stack } from "expo-router";
const { Screen } = Stack;

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Screen name="stack/play" options={{ headerShown: false }} />
        <Screen name="stack/index" options={{ headerShown: false }} />
        <Screen name="stack/about" options={{ headerShown: false }} />
        <Screen name="stack/modal" options={{ presentation: 'modal', headerShown: false }} />
        {/* <Screen name="(tabs)" options={{ headerShown: false }} /> */}
      </Stack>
      {/* <StatusBar style="light" /> */}
    </>

  );
}
