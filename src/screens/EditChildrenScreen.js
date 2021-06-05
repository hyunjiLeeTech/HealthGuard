import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import screen from "../config/screen";
// import font from "../config/context";

const users = [
  {
    id: 1,
    image: "../../assets/icons/logo.png",
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 2,
    image: "../../assets/icons/logo.png",
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 3,
    image: "../../assets/icons/logo.png",
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 4,
    image: "../../assets/icons/logo.png",
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
];

const EditChildrenScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          {users.map((u) => {
            return (
              <View key={u.id}>
                <View style={styles.container}>
                  {/* <Image source={{ uri:u.avatar }} /> */}
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/logo.png")}
                  />
                  <View style={styles.body}>
                    <Text style={styles.name}>{u.name}</Text>
                    <View style={styles.lineContainer}>
                      <Image
                        style={styles.lineIcon}
                        source={require("../../assets/icons/calendar.png")}
                      />
                      <Text style={styles.birth}>BIRTH: {u.birth}</Text>
                    </View>
                    <View style={styles.lineContainer}>
                      <Image
                        style={styles.lineIcon}
                        source={require("../../assets/icons/injection.png")}
                      />
                      <Text style={styles.birth}>LATEST: {u.latest}</Text>
                    </View>
                  </View>
                  <View style={styles.smallIcon}>
                    <Image
                      style={styles.icon}
                      source={require("../../assets/icons/delete.png")}
                    />
                    <TouchableOpacity
                      onPress={() => navigation.navigate("EditProfileScreen")}
                    >
                      <Image
                        style={styles.icon}
                        source={require("../../assets/icons/edit.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.foot}>
        <TouchableOpacity
          style={screen.buttonContainer}
          onPress={() =>
            navigation.navigate("ChildrenScreen", { name: "Children" })
          }
        >
          <Text style={screen.buttonText}> DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0.8,
  },
  foot: {
    flex: 0.2,
  },
  scrollView: {
    flex: 0.8,
  },
  container: {
    height: verticalScale(96),
    backgroundColor: colors.white,
    flexDirection: "row",
    marginBottom: verticalScale(10),
  },
  name: {
    fontFamily: "roboto-bold",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(22),
    margin: scale(5),
  },
  lineContainer: {
    flexDirection: "row",
  },
  birth: {
    fontFamily: "roboto-regular",
    fontSize: moderateScale(12),
    color: colors.black,
    lineHeight: verticalScale(16.5),
    margin: scale(5),
  },
  image: {
    flex: 1,
    resizeMode: "center",
    height: verticalScale(66),
    width: scale(66),
    margin: scale(10),
    marginTop: verticalScale(15),
    justifyContent: "space-around",
    borderRadius: scale(400 / 2),
  },
  body: {
    flex: 2,
    justifyContent: "center",
  },
  icon: {
    height: moderateScale(12),
    width: scale(12),
    justifyContent: "center",
    marginTop: verticalScale(25),
    marginBottom: verticalScale(2),
    marginLeft: scale(20),
    resizeMode: "stretch",
  },
  smallIcon: {
    flexDirection: "column",
    flex: 0.6,
  },
  dataContainer: {
    marginTop: verticalScale(60),
    textAlign: "center",
  },
  lineIcon: {
    marginTop: verticalScale(8),
    marginLeft: scale(4),
    height: verticalScale(10),
    width: scale(10),
    resizeMode: "stretch",
  },
});

export default EditChildrenScreen;
