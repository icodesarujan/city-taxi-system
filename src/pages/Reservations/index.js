import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import Reservation from "../../models/Reservation";

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
  const navigate = useNavigate();

  const [reservations, setReservations] = useState();

  useEffect(() => {
    async function getReservations() {
      const { data: reservations } = await supabase
        .from("reservations")
        .select("*, passengers(*), taxies(*)")
      console.log(reservations);
      if (reservations.length > 0) {
        setReservations(Reservation.fromReservations(reservations));
      }
    }

    getReservations();
  }, []);

  const onActionClick = (rowData) => {
    navigate("/reservation-detail", { state: { rowData } });
  };

  return (
    <div>
      <Container fluid>
        <h1 className="pb-4">Reservations</h1>
        <Table responsive className="text-center">
          <thead>
            <tr>
              <td>Reservation ID</td>
              <td>From </td>
              <td>To </td>
              <td>Date </td>
              <td>Actions </td>
            </tr>
          </thead>
          <tbody>
            {reservations?.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.fromLocation}</td>
                <td>{reservation.toLocation}</td>
                <td>{reservation.date}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => onActionClick(reservation)}
                  >
                    View {reservation.id}
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
