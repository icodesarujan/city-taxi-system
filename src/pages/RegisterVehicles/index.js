import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row, Form, Alert } from 'react-bootstrap'
import { supabase } from '../../utils/supabase'

const RegisterVehicles = () => {
  const [modalShow, setModalShow] = useState(false)
  const [driverName, setdriverName] = useState('')
  const [vehicleName, setVehicleName] = useState('')
  const [vehicleNumber, setVehicleNumber] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const addTaxi = async (e) => {
    setError(false)
    setLoading(true)
    e.preventDefault()
    const { error } = await supabase
    .from('taxies')
    .insert([
      { name: vehicleName, driver_name: driverName, vehicle_no: vehicleNumber },
    ])
    .select()
    if (!error) {
      setModalShow(false)
      setSuccess(true)
    } else {
      setError(true)
    }
    setLoading(false)
    setdriverName('')
    setVehicleName('')
    setVehicleNumber('')
  }

  const clearForm = () => {
    setdriverName('')
    setVehicleName('')
    setVehicleNumber('')
  }

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
        <Col>
          <Button onClick={() => setModalShow(true)}>Register</Button>
        </Col>
      </Row>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter vehicle information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <Alert variant='danger'>
              Something went wrong. Please try again!
            </Alert>
          )}
          <Form onSubmit={e => !loading ? addTaxi(e) : null}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Vehicle name</Form.Label>
              <Form.Control type="text" placeholder="Enter vehicle name" value={vehicleName} onChange={e => setVehicleName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="driverName">
              <Form.Label>Driver name</Form.Label>
              <Form.Control type="text" placeholder="Enter driver name" value={driverName} onChange={e => setdriverName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="driverName">
              <Form.Label>Vehicle number</Form.Label>
              <Form.Control type="text" placeholder="Enter vehicle number" value={vehicleNumber} onChange={e => setVehicleNumber(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              { loading ? 'Loading...' : 'Submit'}
            </Button>
            <Button variant="secondary" onClick={() => clearForm()} className='ms-2'>
              Clear
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default RegisterVehicles