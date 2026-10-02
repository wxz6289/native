import { SetStateAction, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function NativeUI() {
  const [value, setInputValue] = useState('Hello World!');

  const handleChange = (e: { nativeEvent: { text: SetStateAction<string>; }; }) => {
    setInputValue(e.nativeEvent.text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Native UI</Text>
      <TextInput keyboardType='url' multiline editable value={value} onChange={handleChange} placeholder="Type here..." defaultValue='Hello World!' style={styles.input} />
    </ScrollView>
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '80%',
    borderRadius: 4,
  },
});
