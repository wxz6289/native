import audio from '@/assets/走过咖啡屋.mp4';
import { useAudioPlayer } from 'expo-audio';
import { Button, StyleSheet, View } from 'react-native';

export default function PlayScreen() {
  const { play, pause, sound, seekTo } = useAudioPlayer(audio);

  return (
    <View style={styles.container}>
      <Button title="Play" onPress={play} />
      <Button title="Pause" onPress={pause} />
      <Button title="Replay" onPress={() => { seekTo(0); play() }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});