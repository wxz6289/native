import { ThemedText } from '@/components/ThemedText';
import { ActivityIndicator, Alert, Button, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Start() {
  const handlePress = () => {
    console.log('Text pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={false} showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <ThemedText type="title" style={styles.title}>Welcome to the Start Screen!</ThemedText>
        <Text onPress={handlePress} style={styles.text}>Hello {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
        <Pressable onPress={() => { Alert.alert('Hello') }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }}
            style={styles.image}
          />
        </Pressable>
        <TouchableOpacity onPress={() => { Alert.alert('Hello') }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Button title="Get Started" onPress={() => { Alert.alert('Hello') }} />
        <ActivityIndicator size="large" color="#00ffbf" />
        <View style={styles.view}>
          <Button title="Button 1" onPress={() => { Alert.alert('Button 1 pressed') }} />
          <Text>And</Text>
          <Button title="Button 2" onPress={() => { Alert.alert('Button 2 pressed') }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 去除居中，保证内容宽度100%
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#054d7e',
    width: '100%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    color: Platform.OS === 'ios' ? '#3618ad' : '#18ad2a',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    margin: 10,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1bdf9e',
    padding: 20,
  },
});
