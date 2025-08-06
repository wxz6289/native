import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFound() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Oops! Not Found",
          headerStyle: { backgroundColor: "#25292e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 16,
    lineHeight: 36,
    textDecorationLine: "underline",
    color: "#fff",
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderRadius: 4,
    backgroundColor: "#007AFF",
  },
});