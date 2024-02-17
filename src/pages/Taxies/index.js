import React from 'react'
import { supabase } from '../../utils/supabase'
import { useEffect, useState } from 'react';

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
      {taxies.map(taxi => {
        return <div>{taxi.name}</div>
      })}
    </>
  )
}

export default Taxies