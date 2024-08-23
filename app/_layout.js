import { View, Text, Image, ImageBackground } from "react-native";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import "../global.css";

export default function Layout() {
  return (
    <SafeAreaView>
      <ImageBackground source={require("../assets/Frame 13.png")}>
        <View className="h-screen justify-end">
          <View className="h-[475px] backdrop-filter backdrop-blur-sm bg-pp_bsbg rounded-t-[30px] flex justify-center items-center ">
            <Slot />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
