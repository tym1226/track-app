import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, linkTextLn1, linkTextLn2, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{linkTextLn1}</Text>
      <Text style={styles.link}>{linkTextLn2}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    fontFamily: "GillSans-BoldItalic",
  },
});

export default withNavigation(NavLink);
