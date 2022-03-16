import React from 'react'
import axios from 'axios'

import { useLocation } from 'react-router'


function Show() {
  useLocation()
  
  
  
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/pokemon')
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])




  return (
    <h1>Pokemon showing one with wills chat</h1>
  )
}

export default Show