import React, { createContext, useCallback } from "react";
import Cookies from "js-cookie";
import doAlert from "utils/doAlert";
import handleError from "utils/handleError";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const history = useHistory();

  const handleSignIn = useCallback(
    async ({ id, name, email, password }) => {
      try {
        const accessKey = encodeURI(
          JSON.stringify({
            _aId: process.env.REACT_APP_SECRET
          })
        );

        const userDetails = {
          userId: id,
          name,
          email,
          password
        };

        Cookies.set("_aId", accessKey, {
          expires: 1,
          secure: process.env.NODE_ENV === "production"
        });

        Cookies.set("_uId", userDetails, {
          expires: 1,
          secure: process.env.NODE_ENV === "production"
        });

        history.push("/");

        doAlert("Login successful", "success");
      } catch (error) {
        handleError(error);
      }
    },
    [history]
  );

  const handleSignOut = useCallback(async () => {
    Cookies.remove("_aId");
    Cookies.remove("_uId");

    window.location.href = "/login";
  }, []);

  return (
    <AuthContext.Provider value={{ handleSignIn, handleSignOut }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
