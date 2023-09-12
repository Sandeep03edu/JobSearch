import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView, SafeAreaView } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
const Home = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* App Bar */}
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            );
          },
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleClick={() => {
            if (searchQuery) {
              router.push(`/search/${searchQuery}`);
            }
          }}
        />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
