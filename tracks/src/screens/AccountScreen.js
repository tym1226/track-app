import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthConext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { signout } = useContext(AuthConext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 42 }}>Account Screen</Text>
      <Spacer>
        <Button
          title="SIGN OUT"
          onPress={signout}
          titleStyle={{
            fontWeight: "bold",
            fontSize: 22,
            fontFamily: "GillSans-BoldItalic",
          }}
          buttonStyle={styles.button}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    width: 300,
    height: 60,
    alignSelf: "center",
    marginBottom: 15,
  },
});

export default AccountScreen;
