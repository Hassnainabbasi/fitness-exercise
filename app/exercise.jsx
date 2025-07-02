import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fetchBodyParts } from "../api/exerciseDb";
import { Exercises } from "../components/Exercises";

export default function exercise() {
  const router = useRouter();
  const { item } = useLocalSearchParams();
  const Parseitem = useMemo(() => {
    try {
      return JSON.parse(item);
    } catch (e) {
      console.error("Failed to parse item:", e);
      return null;
    }
  }, [item]);
  
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    if (Parseitem?.name) getExercise(Parseitem?.name);
  }, [Parseitem?.name]);

  const getExercise = async (bodyPart) => {
    let dat = await fetchBodyParts(bodyPart);
    setExercise(dat);
    return dat;
  };
  return (
    <ScrollView>
      <StatusBar style="dark" />
      <Image
        source={Parseitem.image}
        style={{
          width: wp(100),
          height: hp(45),
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          height: hp(5.5),
          width: hp(5.5),
          marginTop: hp(7),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: hp(1),
          borderRadius: hp(3),
        }}
        className="bg-rose-500 mx-4 absolute "
      >
        <Ionicons color={"white"} size={hp(5)} name="caret-back-outline" />
      </TouchableOpacity>
      <View className="mx-4 space-y-3 mt-2">
        <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700" >
            {Parseitem.name.charAt(0).toUpperCase() + Parseitem.name.slice(1)} Exercises
        </Text>
      </View>
      <View className="mb-8">
       <Exercises data={exercise}/>
      </View>
    </ScrollView>
  );
}
