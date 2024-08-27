import { View, ImageBackground } from "react-native";
import { Slot, SplashScreen } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from 'expo-font';

import "../global.css";

import { BlurView } from "expo-blur";
import { useEffect, useState } from "react";

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from hiding
        await Font.loadAsync({
          'SF Pro': require('../assets/fonts/SF Pro.ttf'),
          'SF-Pro-Display-Black': require('../assets/fonts/SF-Pro-Display-Black.otf'),
          'SF-Pro-Display-Bold': require('../assets/fonts/SF-Pro-Display-Bold.otf'),
          'SF-Pro-Display-Heavy': require('../assets/fonts/SF-Pro-Display-Heavy.otf'),
          'SF-Pro-Display-Light': require('../assets/fonts/SF-Pro-Display-Light.otf'),
          'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
          'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
          'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
          'SF-Pro-Display-Thin': require('../assets/fonts/SF-Pro-Display-Thin.otf'),
          'SF-Pro-Display-Ultralight': require('../assets/fonts/SF-Pro-Display-Ultralight.otf')
          // You can load multiple fonts here
        });
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync(); // Hide the splash screen after fonts are loaded
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Return null or a loading component until fonts are loaded
  }
  return (
    <SafeAreaView edges={["top"]}>
      <ImageBackground source={require("../assets/Frame 13.png")}>
        <View className="h-full justify-end">
          <BlurView
            intensity={80}
            experimentalBlurMethod="dimezisBlurView"
            className="h-[475px] rounded-t-[30px] overflow-hidden flex justify-center items-center "
          >
            <Slot />
          </BlurView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
