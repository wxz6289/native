import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function dimension() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.viewOther]}>
          <Text>Flex 50% Screen</Text>
        </View>
        <View style={[styles.viewOther2]}>
          <Text>Flex 50% Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  viewOther: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cef1aa',
    width: '100%',
    height: '50%',
  },
  viewOther2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6351c5',
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 2,
  },
});