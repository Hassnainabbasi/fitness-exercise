import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import "../global.css";
import { FadeIn, FadeOut } from "react-native-reanimated";


export default function index() {

  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        display: "flex",
      }}
    >
      <StatusBar style="light" />
      <Image
        style={{ height: "100%", width: "100%", position: "absolute" }}
        source={require("../fitness-app-assets/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{
          width: wp(100),
          height: hp(70),
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: hp(12),
          marginTop: "2rem",
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: hp(5),
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Body<Text className="text-rose-500"> Workouts</Text>
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: hp(5),
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            For You
          </Text>
        </View>
        <View
        >
          <TouchableOpacity
          onPress={() => router.push("home")}
          style={{
            width: wp(75),
            height: hp(7),
          }}
          className="bg-rose-500 flex justify-center mx-auto rounded-full border-[2px] border-neutral-200 mt-5"
          >
            <Text
            className="text-white font-bold tracking-wide text-center py-3"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
