import { View, ImageBackground } from "react-native";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import "../global.css";

import { BlurView } from "expo-blur";

export default function Layout() {
  return (
    <SafeAreaView>
      <ImageBackground source={require("../assets/Frame 13.png")}>
        <View className="h-screen justify-end font-sf">
          <BlurView
            intensity={80}
            experimentalBlurMethod="dimezisBlurView"
            className="h-[475px] bg-pp_bsbg rounded-t-[30px] overflow-hidden flex justify-center items-center "
          >
            <Slot />
          </BlurView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
