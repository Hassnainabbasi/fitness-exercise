import { Ionicons } from "@expo/vector-icons";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import '../global.css';
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

export default function Home() {
  return (
    <SafeAreaView style={styles.heading}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={{ marginTop: hp(1) }}>
          <Text
            style={{
              fontSize: hp(4),            }}
            className="text-neutral-700 font-bold tracking-wide"
          >
            READY TO
          </Text>
          <Text
            style={{
              fontSize: hp(4),
              fontWeight: "bold",
              letterSpacing: 1,
              color: "red",
            }}
          >
            WORKOUT
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: hp(1),
          }}
        >
          <Image
            source={require("../fitness-app-assets/avatar.png")}
            style={{ height: hp(6), width: hp(6), borderRadius: hp(4) }}
          />
          <View
            style={{
              backgroundColor: "#e5e5e5",
              borderRadius: hp(3),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: hp(5.5),
              width: hp(5.5),
            }}
          >
            <Ionicons color={"gray"} size={26} name="notifications" />
          </View>
        </View>
      </View>
      <View style={{ marginTop: hp(2), marginHorizontal: hp(1) }}>
        <ImageSlider />
      </View>
      <View
        style={{ marginTop: hp(2), marginHorizontal: hp(1), flex: 1 }}
      >
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    display: "flex",
    marginTop: "1.2rem",
    backgroundColor: "#fffff",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "1.2rem"
  },
});
