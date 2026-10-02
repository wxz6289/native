import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { Button, ImageBackground, Modal, StyleSheet, Text, View } from 'react-native';

import BgImage from '@/assets/images/bg.jpeg';

export default function UseState() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <ImageBackground source={BgImage} style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View >
        <Entypo name="plus" size={24} color="tomato" onPress={() => setCount(count + 1)} />
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </View>

      <Button title="Show Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} animationType='slide'>
        <View style={styles.modalContainer} >
          <Text style={styles.modalText}>This is a modal!</Text>
          <AntDesign name="close" size={24} color="black" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  text: {
    fontSize: 48,
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  modalText: {
    marginTop: 16,
    fontSize: 48,
  },
});
