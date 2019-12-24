import React, { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import { Container, Menu, Dropdown } from "semantic-ui-react";
import { getUser } from "utils/cookieHelpers";

const Header = () => {
  const { handleSignOut } = useContext(AuthContext);
  const { name } = getUser();

  return (
    <>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
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
    </>
  );
};

export default Header;
