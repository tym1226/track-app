import React, { useContext } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Context as AuthConext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthConext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/loginBackground.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm
          headerText="Sign up for Tracks!"
          errorMessage={state.errorMessage}
          submitBtnText="SIGN UP"
          onSubmit={signup}
        />

        <NavLink
          routeName="Signin"
          linkTextLn1="Already have an account?"
          linkTextLn2="Sign in instead"
        />
      </ImageBackground>
    </View>
  );
};

// hide the header
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignupScreen;
