import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { BodyPart } from "../constants";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function BodyParts() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Text
        className="text-neutral-700"
        style={{ fontSize: hp(3.5), fontWeight: "semibold" }}
      >
        Exercises
      </Text>
      <FlatList
        data={BodyPart}
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
}

const ItemCard = ({ item, index, router }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
          <TouchableOpacity onPress={() => router.push({ pathname: "/exercise", params: { item: JSON.stringify(item) },
          })
        }
        style={{
          width: wp(44),
          height: hp(24),
          display: "flex",
          justifyContent: "end",
          marginBottom: 10,
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            width: wp(44),
            height: hp(24),
            borderRadius: 20,
            position: "absolute",
          }}
          source={item.image}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            width: wp(44),
            height: hp(24),
            position: "absolute",
            bottom: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text
          style={{ fontSize: hp(2.3), color: "white", fontWeight: "semibold" }}
          className="tracking-wide text-center absolute bottom-2 w-full"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
