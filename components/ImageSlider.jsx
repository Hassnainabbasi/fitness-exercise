import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { sliderImages } from "../constants";

const { width } = Dimensions.get("window");
const itemWidth = width - 20 ;
const sidePadding = (width - itemWidth) / 2;
const spacing = 8;

export default function ImageSlider() {
  return (
    <Carousel
      loop
      autoPlay
      width={itemWidth}
      height={hp(25)}
      data={sliderImages}
      scrollAnimationDuration={2000}
      renderItem={ItemCard}
      autoPlayInterval={4000}
      style={{
        alignSelf: "center",
      }}
      
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.96,
        parallaxScrollingOffset: spacing,
      }}
      contentContainerStyle={{
        paddingHorizontal: sidePadding,
      }}
    />
  );
}

const ItemCard = ({ item }) => {
  return (
    <View
      style={{
        width: itemWidth,
        height: hp(25),
      }}
    >
      <Image
        source={item}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: hp(2),
        }}
      />
    </View>
  );
};
