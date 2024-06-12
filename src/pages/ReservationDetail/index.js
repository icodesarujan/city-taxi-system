import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import Reservation from "../../models/Reservation";

const ReservationDetail = () => {
  const location = useLocation();
  const {id} = useParams();
  const [reservation, setReservation] = useState(null);

  console.log(id);

  useEffect(() => {
    async function getReservations() {
      try {
        const { data: reservation } = await supabase
          .from("reservations")
          .select("*, passengers(*), taxies(*)")
          .eq('id', +id)
          if (reservation) {
            console.log(reservation);
            setReservation(Reservation.fromReservations(reservation));
          }
      } catch (e) {
        console.log(e);
      }
    }

    getReservations();
  }, []);


  return (
    <>
      <Container fluid>
        <h1>Reservation Detail</h1>

        {reservation?.[0] && (
          <Row className="row-cols-1 row-cols-md-2 g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Passenger Detail</Card.Title>
                  <Card.Text className="fw-medium text-muted">
                    Passenger Name: <span className="fw-normal">{reservation[0]?.passenger.firstName} {reservation[0].passenger.lastName}</span>
                    {console.log(reservation)}
                  </Card.Text>
                  <Card.Text className="fw-medium text-muted">
                    Passenger Mobile:{" "}
                    <span className="fw-normal">{reservation[0].passenger.mobile}</span>
                  </Card.Text>
                  <Card.Text className="fw-medium text-muted">
                    Passenger Email:{" "}
                    <span className="fw-normal">{reservation[0].passenger.email}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Trip Detail</Card.Title>
                  <Card.Text className="fw-medium text-muted">
                    To: <span className="fw-normal">{reservation[0]?.toLocation}</span>
                  </Card.Text>
                  <Card.Text className="fw-medium text-muted">
                    From: <span className="fw-normal">{reservation[0]?.fromLocation}</span>
                  </Card.Text>
                  <Stack direction="horizontal">
                    <Col>
                      <Card.Text className="fw-medium text-muted">
                        Date: <span className="fw-normal">{reservation[0]?.date}</span>
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="fw-medium text-muted">
                        Time: <span className="fw-normal">09.00 AM</span>
                      </Card.Text>
                    </Col>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Texi Detail</Card.Title>
                  <Stack direction="horizontal">
                    <Col>
                      <Card.Text className="fw-medium text-muted">
                        Driver Name: <span className="fw-normal">Saruj</span>
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="fw-medium text-muted">
                        Driver Contact No:{" "}
                        <span className="fw-normal">+94 768309288</span>
                      </Card.Text>
                    </Col>
                  </Stack>
                  <Stack direction="horizontal">
                    <Col>
                      <Card.Text className="fw-medium text-muted">
                        Vehicle Registration No:{" "}
                        <span className="fw-normal">CT_000091</span>
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="fw-medium text-muted">
                        Vehicle Model: <span className="fw-normal">Car</span>
                      </Card.Text>
                    </Col>
                  </Stack>
                  <Card.Text className="fw-medium text-muted">
                    Vehicle Color: <span className="fw-normal">Silver</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Image
                src="https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                rounded
                alt="Vehicle Image"
                fluid
                width={350}
              />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ReservationDetail;
