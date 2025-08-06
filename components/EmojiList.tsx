import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from 'react-native';

type Props = {
  onSelect: (emoji: ImageSourcePropType) => void;
  onClose: () => void;
};

export default function EmojiList({ onSelect, onClose }: Props) {
  const [emojis] = useState<ImageSourcePropType[]>([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ]);

  return (
    <FlatList
      data={emojis}
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      horizontal={Platform.OS === 'web'}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Pressable onPress={() => { onSelect(item); onClose(); }}>
          <Image source={item}  style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});