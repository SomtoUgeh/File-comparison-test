import React from "react";
import HistoryTable from "./History";
import { useHistory } from "react-router-dom";
import { getUser } from "utils/cookieHelpers";
import { Header, Button } from "semantic-ui-react";

const Home = () => {
  const history = useHistory();
  const { name } = getUser();

  return (
    <div>
      <Header as="h1">Welcome, {name}</Header>
      <p>
        This is an application that allows you compare contents in two different <code>.txt</code>{" "}
        file.
      </p>

      <HistoryTable />

      <div style={{ marginTop: "5rem" }}>
        <Button color="teal" fluid onClick={() => history.push("/compare")}>
          Continue to Compare documents
        </Button>
      </div>
    </div>
  );
};

export default Home;
