import React, { useContext } from "react";
import { getUser } from "utils/cookieHelpers";
import { AuthContext } from "contexts/AuthContext";
import { Container, Menu, Dropdown } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { handleSignOut } = useContext(AuthContext);
  const { name } = getUser();
  const history = useHistory();

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header onClick={() => history.push("/")}>
          Document-Compare
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown item simple text={name}>
            <Dropdown.Menu>
              <Dropdown.Item as="a" onClick={handleSignOut}>
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;
