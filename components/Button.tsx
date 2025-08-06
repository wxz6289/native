import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
  theme?: 'primary';
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={[styles.container, { borderWidth: 4, padding: 2, borderColor: '#ffd33d', borderRadius: 16 }]}>
        <Pressable style={[styles.button, { backgroundColor: '#ffffff' }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonText, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}></Pressable>
        <Text style={styles.buttonText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});