import React from 'react'
import { supabase } from '../../utils/supabase'
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Taxies = () => {
  const [taxies, setTaxies] = useState([])
  useEffect(() => {
    async function getTaxies() {
      const { data: taxies } = await supabase.from('taxies').select()
      console.log(taxies);
      if (taxies.length > 0) {
        setTaxies(taxies)
      }
    }

    getTaxies()
  }, [])
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Vehicle name</th>
            <th>Vehicle number</th>
            <th>Driver name</th>
          </tr>
        </thead>
        <tbody>
          {taxies.map(taxi => {
            return (
            <tr key={taxi.id}>
              <td>{taxi.id}</td>
              <td>{taxi.name}</td>
              <td>{taxi.vehicle_no}</td>
              <td>{taxi.driver_name}</td>
            </tr>

            )

          })}
        </tbody>
      </Table>
    </>
  )
}

export default Taxies