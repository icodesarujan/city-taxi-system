import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import Select from "react-select";

const ReservationPage = () => {
  const [locations, setLocations] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    fromLocation: null,
    toLocation: null,
    selectedVehicle: null,
    name: "",
    mobile: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Dummy locations
    const dummyLocations = [
      { value: "location1", label: "Galle" },
      { value: "location2", label: "Jaffna" },
      { value: "location2", label: "Ampara" },
      { value: "location2", label: "Sigiriya" },
      { value: "location2", label: "Colombo" },
      // Add more locations as needed
    ];
    setLocations(dummyLocations);

    // Dummy vehicles
    const dummyVehicles = [
      { value: "vehicle1", label: "Toyota Corolla , Driver : John " },
      { value: "vehicle2", label: "BMW M5 ,  Driver : Smith " },
      { value: "vehicle2", label: "Axio,  Driver : Jane " },
      { value: "vehicle2", label: "Land Rover ,  Driver : Mark " },
      { value: "vehicle2", label: "Toyota TownAce,  Driver : Miller " },
      // Add more vehicles as needed
    ];
    setVehicles(dummyVehicles);
  }, []);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform reservation submission logic here (using dummy data)
    try {
      // Simulate an API call or database operation
      // For demonstration purposes, just log the form data
      console.log("Form data submitted:", formData);

      setSuccess(true);
      // Clear the form after successful submission
      setFormData({
        fromLocation: null,
        toLocation: null,
        selectedVehicle: null,
        name: "",
        mobile: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setError(true);
    }
    alert("REserved Successfully ");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Reservation Page</h1>
        </Col>
      </Row>
      {/* <Row className="mb-4">
        {success && (
          <Alert
            variant="success"
            onClose={() => setSuccess(false)}
            dismissible
          >
            Reservation successfully submitted
          </Alert>
        )}
        {error && (
          <Alert variant="danger" onClose={() => setError(false)} dismissible>
            Error submitting reservation. Please try again.
          </Alert>
        )}
      </Row> */}
      <Row className="mb-4">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="fromLocation">
                <Form.Label>From </Form.Label>
                <Select
                  options={locations}
                  value={formData.fromLocation}
                  onChange={(selectedOption) =>
                    handleChange("fromLocation", selectedOption)
                  }
                  isSearchable
                  placeholder="Select From Location"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="toLocation">
                <Form.Label>To </Form.Label>
                <Select
                  options={locations}
                  value={formData.toLocation}
                  onChange={(selectedOption) =>
                    handleChange("toLocation", selectedOption)
                  }
                  isSearchable
                  placeholder="Select To Location"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={12}>
              <Form.Group controlId="selectedVehicle">
                <Form.Label>Select Vehicle</Form.Label>
                <Select
                  options={vehicles}
                  value={formData.selectedVehicle}
                  onChange={(selectedOption) =>
                    handleChange("selectedVehicle", selectedOption)
                  }
                  isSearchable
                  placeholder="Select Vehicle"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            {" "}
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              {" "}
              <Form.Group controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                />
              </Form.Group>
            </Col>{" "}
          </Row>
          <Row className="mb-4">
            {" "}
            <Col md={6}>
              {" "}
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" block>
            Confirm Reservation
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default ReservationPage;
