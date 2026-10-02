import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Flex() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view, styles.view1]}>
        <Text>Flex Screen</Text>
      </View>
      <View style={[styles.view, styles.view2]}>
        <Text>Flex Screen</Text>
      </View>
      <View style={[styles.view, styles.view3]}>
        <Text>Flex Screen</Text>
      </View>
      <View style={[styles.view, styles.view4]}>
        <Text>Flex Screen</Text>
      </View>
      <View style={[styles.view, styles.view5]}>
        <Text>Flex Screen</Text>
      </View>
      <View style={[styles.view, styles.view6]}>
        <Text>Flex Screen</Text>
      </View>
    </SafeAreaView >
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
  scrollContainer: {
    alignItems: 'center',
  },
  view: {
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    backgroundColor: '#f0f0f0',
  },
  view2: {
    backgroundColor: '#179653',
  },
  view3: {
    backgroundColor: '#ad0c0c',
  },
  view4: {
    backgroundColor: '#120cb1',
  },
  view5: {
    top: 20,
    left: 20,
    zIndex: 1,
    // position: 'fixed',
    backgroundColor: '#8c89db',
  },
  view6: {
    backgroundColor: '#5fb10c',
  },

})