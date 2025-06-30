import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function exercisesDetail() {
  const item = useLocalSearchParams();
  const router = useRouter();
  console.log(item, "detail");
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: hp(50) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          height: hp(5.5),
          width: hp(5.5),
          marginTop: hp(7),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   paddingRight: ,
          borderRadius: hp(3),
        }}
        className="bg-rose-500 mx-4 absolute right-0"
      >
        <Ionicons color={"white"} size={hp(5)} name="close" />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        className="mx-4 space-y-2 mt-3"
      >
        <Animated.Text
          entering={FadeInDown.delay(100).duration(100).springify()}
          style={{
            fontSize: hp(3),
          }}
          className="mb-2 font-bold text-neutral-900"
        >
          {item?.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(200).springify()}
          style={{
            fontSize: hp(2),
          }}
          className="tracking-wide mb-1 text-neutral-800"
        >
          Equipment
          <Text
            style={{
              fontSize: hp(2),
            }}
            className="font-bold text-neutral-900 ml-1"
          >
            {item?.equipment}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{
            fontSize: hp(2),
          }}
          className="tracking-wide mb-1 text-neutral-800"
        >
          Secondary Muscles
          <Text
            style={{
              fontSize: hp(2),
            }}
            className="font-bold text-neutral-900 ml-1"
          >
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(400).springify()}
          style={{
            fontSize: hp(2),
          }}
          className="tracking-wide mb-1 text-neutral-800"
        >
          Target
          <Text
            style={{
              fontSize: hp(2),
            }}
            className="font-bold text-neutral-900 ml-1"
          >
            {item?.target}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(500).duration(500).springify()}
          style={{
            fontSize: hp(2),
          }}
          className="tracking-wide mb-1 text-neutral-800"
        >
          Instructions
          <Text
            style={{
              fontSize: hp(2),
            }}
            className="font-medium text-neutral-900 ml-1"
          >
            {item?.instructions.split(",").map((instruction, index) => {
              return (
                <Animated.Text
                  entering={FadeInDown.delay((index*6)*100).duration(100).springify()}
                  style={{ fontSize: hp(1.7) }}
                  className=" text-neutral-800 "
                  key={instruction}
                >
                  {instruction}
                </Animated.Text>
              );
            })}
          </Text>
        </Animated.Text>
      </ScrollView>
    </View>
  );
}
