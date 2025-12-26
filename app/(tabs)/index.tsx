import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/react-hook-form.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.stepContainer}>
        <Link href="/rhf-examples" asChild>
          <Pressable>
            <ThemedText type="subtitle">React Hook Form Examples</ThemedText>
            <ThemedText>Explore demo forms with validation and schemas. Click here.</ThemedText>
          </Pressable>
        </Link>
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
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
