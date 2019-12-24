import React, { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";

const Header = () => {
  const { handleSignOut } = useContext(AuthContext);

  return (
    <div>
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
