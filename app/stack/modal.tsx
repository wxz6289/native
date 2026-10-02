import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

export default function StackModal() {
  const [visible, setVisible] = useState(true);
  return (
    <Modal visible={visible} animationType="slide" onPointerEnter={() => { setVisible(true); }}>
      <View style={styles.container} >
        <Text style={styles.title}>Stack Modal</Text>
        <AntDesign name="close" size={24} color="black" onPress={() => { setVisible(false); }} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#22b357',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
});
