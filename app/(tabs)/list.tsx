import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

export default function ListScreen() {
  const data = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.container}>
        <SectionList sections={[
          { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
  },
  sectionHeader: {
    fontSize: 32,
    backgroundColor: '#fff',
    padding: 8,
    fontWeight: 'bold',
  },
});
