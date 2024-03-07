import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { tableData, tableHeading } from "../../Data/ReservationData";

const getClassNames = (key, value) => {
  if (key === "PaymentProcess") {
    if (value === "Pending") {
      return "bg-warning text-black fw-bolder rounded text-center";
    } else if (value === "Success") {
      return "bg-success text-white fw-bolder rounded text-center";
    }
  }
  return "";
};

const Reservations = () => {
  const onActionClick = (rowData) => {
    console.log("Row data:", rowData);
  };

  return (
    <div>
      <Container fluid>
        <h1 className="pb-4">Reservations Details</h1>
        <Table responsive className="text-center">
          <thead>
            <tr>
              {tableHeading?.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(item).map(([key, value], cellIndex) => (
                  <td key={cellIndex} className={getClassNames(key, value)}>
                    {value}
                  </td>
                ))}
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => onActionClick(item)}
                  >
                    View {item.ReservationID}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Reservations;
