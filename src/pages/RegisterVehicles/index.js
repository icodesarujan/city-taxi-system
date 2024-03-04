import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row, Form, Alert } from 'react-bootstrap'
import { supabase } from '../../utils/supabase'
import { v4 as uuidv4 } from 'uuid'

const RegisterVehicles = () => {
  const [modalShow, setModalShow] = useState(false)
  const [formData, setFormData] = useState({
    taxiRegNumber: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    color: '',
    seats: '',
    licenseNumber: '',
    driverName: '',
    driverContact: '',
    driverAddress: '',
    insuranceProvider: '',
    policyNumber: '',
    policyExpiry: '',
    serviceType: '',
    availabilityStatus: ''
  });
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // const uploadProfileImage = async () => {
  //   // store in bucket
  //   if (profileImage) {
  //     const {data, error} = await supabase.storage.from('city-taxi').upload(uuidv4(), profileImage)
  //   }
  // }

  // const addTaxi = async (e) => {
  //   setError(false)
  //   setLoading(true)
  //   e.preventDefault()
  //   uploadProfileImage()
  //   // store in table
  //   const { error } = await supabase
  //   .from('taxies')
  //   .insert([
  //     { name: vehicleName, driver_name: driverName, vehicle_no: vehicleNumber },
  //   ])
  //   .select()
  //   if (!error) {
  //     setModalShow(false)
  //     setSuccess(true)
  //   } else {
  //     setError(true)
  //   }
  //   setLoading(false)
  //   setdriverName('')
  //   setVehicleName('')
  //   setVehicleNumber('')
  // }

  // const clearForm = () => {
  //   setdriverName('')
  //   setVehicleName('')
  //   setVehicleNumber('')
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your API here
  };

  return (
    <div className='mt-5'>
      <Row className='mb-2'>
        <Col>
          <h1>Register a new vehicle</h1>
        </Col>
      </Row>
      <Row>
        {success && (
          <Alert variant='success' onClose={() => setSuccess(false)} dismissible>
            Vehicles successfully added
          </Alert>
        )}
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="taxiRegNumber">
              <Form.Label>Taxi Registration Number</Form.Label>
              <Form.Control type="text" name="taxiRegNumber" value={formData.taxiRegNumber} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="vehicleMake">
              <Form.Label>Vehicle Make</Form.Label>
              <Form.Control type="text" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Row  className="mb-4">
          <Form.Group as={Col} controlId="vehicleModel">
            <Form.Label>Vehicle Model</Form.Label>
            <Form.Control type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="vehicleYear">
            <Form.Label>Vehicle Year</Form.Label>
            <Form.Control type="number" name="vehicleYear" value={formData.vehicleYear} onChange={handleChange} />
          </Form.Group>
          </Row>
          <Row className="mb-4">
          <Form.Group as={Col} controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" name="color" value={formData.color} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="seats">
            <Form.Label>Number of Seats</Form.Label>
            <Form.Control type="number" name="seats" value={formData.seats} onChange={handleChange} />
          </Form.Group>
          </Row>
          <hr class="my-4"></hr>
          <Row  className="mb-4">
          <Form.Group as={Col} controlId="licenseNumber">
            <Form.Label>Driver's License Number</Form.Label>
            <Form.Control type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="driverName">
            <Form.Label>Driver's Full Name</Form.Label>
            <Form.Control type="text" name="driverName" value={formData.driverName} onChange={handleChange} />
          </Form.Group>
          </Row>
          
          <Row className="mb-4">
          <Form.Group as={Col} controlId="driverContact">
            <Form.Label>Driver's Contact Information</Form.Label>
            <Form.Control type="text" name="driverContact" value={formData.driverContact} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="driverAddress">
            <Form.Label>Driver's Home Address</Form.Label>
            <Form.Control type="text" name="driverAddress" value={formData.driverAddress} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="insuranceProvider">
            <Form.Label>Insurance Provider</Form.Label>
            <Form.Control type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} />
          </Form.Group>
          </Row>
          
          <hr class="my-4"></hr>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="policyNumber">
              <Form.Label>Policy Number</Form.Label>
              <Form.Control type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="policyExpiry">
              <Form.Label>Policy Expiry Date</Form.Label>
              <Form.Control type="date" name="policyExpiry" value={formData.policyExpiry} onChange={handleChange} />
            </Form.Group>

          </Row>
          <Row className="mb-4">
          <Form.Group as={Col} controlId="serviceType">
            <Form.Label>Taxi Service Type</Form.Label>
            <Form.Control as="select" name="serviceType" value={formData.serviceType} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="luxury">Luxury</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="availabilityStatus">
            <Form.Label>Availability Status</Form.Label>
            <Form.Control as="select" name="availabilityStatus" value={formData.availabilityStatus} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </Form.Control>
          </Form.Group>
          </Row>
          <Row className="mb-4">
          <Button variant="primary" type="submit" block>
            Register Taxi
          </Button>
          </Row>
        </Form>
      </Row>
    </div>
  )
}

export default RegisterVehicles