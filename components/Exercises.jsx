import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() =>
          router.push({ pathname: "/exercisesDetail", params: item })
        }
        className="flex py-3 space-y-2"
        accessibilityLabel={`See details for ${item.name}`}
        accessibilityRole="button"
      >
        <View className="shadow rounded-[25px] overflow-hidden">
          {/* Image Loader */}
          {loading && (
            <Animated.View
              entering={FadeIn}
              style={{
                width: wp(44),
                height: hp(24),
                borderRadius: 25,
                backgroundColor: "#e0e0e0",
              }}
            />
          )}

          {/* Actual Image */}
          {!error && (
            <Image
              source={{ uri: item.gifUrl }}
              resizeMode="cover"
              style={{
                width: wp(44),
                height: hp(24),
                borderRadius: 25,
                position: loading ? "absolute" : "relative",
                opacity: loading ? 0 : 1,
              }}
              onLoadEnd={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
            />
          )}

          {/* Fallback Image on Error */}
          {error && (
            <Image
              source={require("../fitness-app-assets/falback.png")}
              resizeMode="cover"
              style={{ width: wp(44), height: hp(24), borderRadius: 25 }}
            />
          )}

          {/* Title */}
          {!loading && (
            <Text
              style={{ fontSize: hp(2) }}
              className="text-neutral-700 mt-2 text-center mb-2 font-semibold ml-1 tracking-wide"
            >
              {item?.name?.length > 20
                ? item.name.slice(0, 18) + "..."
                : item.name}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
