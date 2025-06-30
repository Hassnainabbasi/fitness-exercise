import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const Exercises = ({ data }) => {
  const router = useRouter();
  return (
    <View className="mx-4">
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ItemCard router={router} index={index} item={item} />
        )}
        columnWrapperStyle={{
          justifyContent: "space-around",
        }}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 50,
        }}
      />
    </View>
  );
};

const ItemCard = ({ item, index, router }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify() }>
      <TouchableOpacity 
       onPress={() => router.push({ pathname: `/exercisesDetail`, params: item })}
      className="flex py-3 space-y-2">
          <View className="shadow rounded-[25px]">
          <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(44), height: hp(24) }}
          className="rounded-[25px]"
          />
          <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 mt-2 text-center mb-2 font-semibold ml-1 tracking-wide"
          >
          {
            item?.name?.length>20? item.name.slice(0, 18)+"...":item.name
          }
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View >
  );
};
