import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitBtnText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text
          h2
          style={{
            marginTop: 175,
            alignSelf: "center",
            fontFamily: "GillSans-BoldItalic",
            fontWeight: "500",
          }}
        >
          {headerText}
        </Text>
      </Spacer>

      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer />

      <Input
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Spacer />
      <Spacer>
        <Button
          title={submitBtnText}
          onPress={() => onSubmit({ email, password })}
          titleStyle={{
            fontWeight: "bold",
            fontSize: 22,
            fontFamily: "GillSans-BoldItalic",
          }}
          buttonStyle={styles.button}
        />
      </Spacer>
    </>
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
  errorMessage: {
    fontSize: 22,
    fontWeight: "bold",
    color: "yellow",
    alignSelf: "center",
    backgroundColor: "red",
  },
});

export default AuthForm;
