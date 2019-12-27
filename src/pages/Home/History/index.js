import React from "react";
import { Table, Header } from "semantic-ui-react";

const index = () => {
  return (
    <div>
      <div style={{ marginTop: "5rem" }}>
        <Header as="h3">History</Header>
      </div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student 1</Table.HeaderCell>
            <Table.HeaderCell>Student 2</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Mike</Table.Cell>
            <Table.Cell>50% Similarity</Table.Cell>
            <Table.Cell selectable>
              <a href="#">Compare</a>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Mike</Table.Cell>
            <Table.Cell>50% Similarity</Table.Cell>
            <Table.Cell selectable>
              <a href="#">Compare</a>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Mike</Table.Cell>
            <Table.Cell>50% Similarity</Table.Cell>
            <Table.Cell selectable>
              <a href="#">Compare</a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default index;
