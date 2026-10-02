import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StackIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Navigation</Text>
      <Link href="/stack/about">Go to About</Link>
      <Link href="/stack/modal">Open Modal</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
});
