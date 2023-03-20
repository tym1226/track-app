import React, { useEffect, useContext } from "react";
import { Context as AuthConext } from "../context/AuthContext";

/** This screen is added as a default blank screen before tryLocalSignin is executed,
 * so that the users won't have to see the flash of sign up screen.
 */
const LoadingScreen = () => {
  const { tryLocalSignin } = useContext(AuthConext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default LoadingScreen;
