import { View, ImageBackground } from "react-native";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import "../global.css";

import { BlurView } from "expo-blur";

export default function Layout() {
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
