import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {
    const [pirate, setPirate] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
        .then((response) =>{
            console.log(response.data)
            setPirate(response.data)
        })
    }, [id])

  return (
    <>
    <h1>here is our pirate</h1>
    <div className='card'>
        <h1>{pirate.pirate_name}</h1>
        <p>treasure: {pirate.num_of_treasure}</p>
        <p>catch phrase: {pirate.catch_phrase}</p>
    </div>
    </>
  )
}


export default Display