import React, { createContext, useCallback } from "react";
import Cookies from "js-cookie";
import doAlert from "utils/doAlert";
import handleError from "utils/handleError";
import { useHistory } from "react-router-dom";
import { postApiZero, getApiZero } from "api/requestHandlers";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const history = useHistory();

  const handleSignIn = useCallback(
    async payload => {
      try {
        const accessKey = encodeURI(
          JSON.stringify({
            _aId: process.env.REACT_APP_SECRET
          })
        );

        const {
          data: { token, user: userDetails }
        } = await postApiZero("auth/login", payload);

        Cookies.set("_aId", accessKey, {
          expires: 1,
          secure: process.env.NODE_ENV === "production"
        });

        Cookies.set("_tId", token, {
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
    try {
      const { success } = await getApiZero("auth/logout");

      if (success) {
        Cookies.remove("_aId");
        Cookies.remove("_uId");

        window.location.href = "/login";
      }
    } catch (error) {
      handleError(error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ handleSignIn, handleSignOut }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
