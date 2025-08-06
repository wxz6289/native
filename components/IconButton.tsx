import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string
  onPress: () => void;
};

export default function CircleButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <MaterialIcons name={icon} size={38} color="#fff" />
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginTop: 12,
  },
});