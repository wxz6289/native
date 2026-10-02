import PlaceholderImage from '@/assets/images/background-image.png';
import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton'; // Adjust the import path as necessary
import EmojiList from '@/components/EmojiList';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiSticker from '@/components/EmojiSticker';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';
import dom2image from 'dom-to-image';
import { launchCameraAsync, requestCameraPermissionsAsync } from 'expo-image-picker';
import { saveToLibraryAsync, usePermissions } from 'expo-media-library';
import { useRef, useState } from 'react';
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(null);
  const [status, requestPermission] = usePermissions();
  const imageRef = useRef<View>(null);
  if (status === null) {
    requestPermission();
  }
  const pickerImage = async () => {
    const permissionResult = await requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }
    const result = await launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowOptions(true);
      console.log('Image selected:', result);
    } else {
      alert('No image selected');
    }
  }

  const onReset = () => {
    setShowOptions(false);
  };

  const onSaveImage = async () => {

    try {
      if (Platform.OS !== 'web') {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
        await saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Image saved to library');
          console.log('Image saved to library:', localUri);
        }
      } else {
        const dataUrl = await dom2image.toPng(imageRef.current as any, {
          width: 320,
          height: 440,
          quality: 0.95,
        });

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'screenshot.png'; // 设置文件名
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        if (dataUrl) {
          console.log('Image saved to library');
        }
      }
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showOptions ? (<View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImage} />
        </View>
      </View>) :
        (
          <View style={styles.footerContainer}>
            <Button label="Choose a Photo" theme='primary' onPress={pickerImage} />
            <Button label="Use this Photo" onPress={() => setShowOptions(true)} />
          </View>)}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onClose={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

