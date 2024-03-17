import React from "react";
import { supabase } from "../../utils/supabase";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Taxi from "../../models/Taxi";

const Taxies = () => {
  const [taxies, setTaxies] = useState([]);
  useEffect(() => {
    async function getTaxies() {
      const { data: taxies } = await supabase.from("taxies").select();
      if (taxies.length > 0) {
        setTaxies(Taxi.fromTaxies(taxies));
      }
    }

    getTaxies();
  }, []);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Vehicle number</th>
            <th>Driver Name</th>
            <th>Contact</th>
            <th>Licence No</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {taxies.map((taxi) => {
            return (
              <tr key={taxi.id}>
                <td>{taxi.id}</td>
                <td>{taxi.make}</td>
                <td>{taxi.model}</td>
                <td>{taxi.year}</td>
                <td>{taxi.color}</td>
                <td>{taxi.vehicleNo}</td>
                <td>{taxi.driverName}</td>
                <td>{taxi.contact}</td>
                <td>{taxi.licNumber}</td>
                <td>{taxi.availability ? "Available" : "Not-Available"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Taxies;
// name,
//     vehicleNo,
//     driverName,
//     make,
//     model,
//     year,
//     color,
//     contact,
//     licNumber,
//     expDate,
//     availability,
