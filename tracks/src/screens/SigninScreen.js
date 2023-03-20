import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Context as AuthConext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthConext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/loginBackground.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm
          headerText="Sign in to Tracks" //"YOUR WORKOUT. YOUR TIME. YOUR BODY. OWN IT."
          errorMessage={state.errorMessage}
          submitBtnText="SIGN IN"
          onSubmit={signin}
        />

        <NavLink
          routeName="Singup"
          linkTextLn1="Don't have an account yet?"
          linkTextLn2="Sign up instead"
        />
      </ImageBackground>
    </View>
  );
};

// hide the header
SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SigninScreen;
