import React, { useContext } from "react";
import { Table, Header } from "semantic-ui-react";
import { HistoryContext } from "contexts/HistoryContext";

const History = () => {
  const { comparisonHistory } = useContext(HistoryContext);

  return (
    <div>
      <div style={{ marginTop: "5rem" }}>
        <Header as="h3">History</Header>
      </div>

      {comparisonHistory.length > 0 ? (
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
            {comparisonHistory.length > 0 &&
              comparisonHistory.map(({ details, score }) => (
                <Table.Row>
                  {details.map(({ student }) => (
                    <Table.Cell>{student}</Table.Cell>
                  ))}
                  <Table.Cell>{`${Number(score)}%`} Similarity</Table.Cell>

                  <Table.Cell selectable>
                    <a
                      href
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      Run again
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      ) : (
        <div style={{ marginTop: 10 }}>
          You dont have any history here! Compare your first documents!
        </div>
      )}
    </div>
  );
};

export default History;
