import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {
    const [products, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
        .then((response) =>{
            console.log(response.data)
            setProduct(response.data)
        })
    }, [id])

  return (
    <>
    <h1>here is our product</h1>
    <div className='card'>
        <h1>{products.title}</h1>
        <p>price: {products.price}</p>
        <p>description: {products.description}</p>
    </div>
    </>
  )
}


export default Display
