import { Text, View, TouchableHighlight } from "react-native";

export default function Page() {
  return (
    <View className="flex h-full w-full items-center justify-start gap-12">
      <Text className="text-5xl leading-tight w-[323px] py-16 text-center font-sf font-semibold">
        A confiança de um governo seguro
      </Text>

      <TouchableHighlight className="bg-[#4E4E4E] rounded-full px-24 py-4">
        <Text className='text-white'>Continuar</Text>
      </TouchableHighlight>
    </View>
  );
}
