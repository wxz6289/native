import { StyleSheet, Text, View } from "react-native";
import { moderateScale, s, vs } from 'react-native-size-matters';

export default function Responsive() {
  return (
    <View style={styles.container}>
      <View style={[styles.view]}>
        <Text>Responsive Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view: {
    backgroundColor: '#74e485',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: s(400),
    height: vs(500),
    borderRadius: s(20),
  },
  text: {
    color: '#0d4845',
    fontSize: moderateScale(36),
    fontWeight: 'bold',
    textAlign: 'center',
  }
})