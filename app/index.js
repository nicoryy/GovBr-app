import { Text, View, TouchableOpacity } from "react-native";

export default function Page() {
  return (
    <View className="flex justify-center items-center ">
      <Text className="text-5xl w-[323px] py-24 bg-red-400 text-center font-medium">
        A confiança de um governo seguro
      </Text>

      <TouchableOpacity className="bg-pp_bsbg rounded-full px-24 py-3">
        <Text>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
