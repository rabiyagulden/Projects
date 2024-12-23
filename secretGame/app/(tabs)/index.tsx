import { Image, StyleSheet, Platform, FlatList, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const secretCode = [
    { index: 1, colorCode: "#eb4034" },
    { index: 2, colorCode: "#ebcc34" },
    { index: 3, colorCode: "#345beb" },
    { index: 4, colorCode: "#34eb5e" },
  ]
  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ah Nerede ?</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>


        <FlatList
          data={secretCode}
          horizontal={true}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.index}
              style={{
                backgroundColor: item.colorCode,
                padding: 10,
                borderRadius: 50,
                margin: 5
              }}>
              <ThemedText
                style={{
                  color: '#fff',
                }}>
                {item.index}
              </ThemedText>
            </TouchableOpacity>
          )}
        />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>

      </ThemedView>
      <ThemedView style={styles.stepContainer}>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
