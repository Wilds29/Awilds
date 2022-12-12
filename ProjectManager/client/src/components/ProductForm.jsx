import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductForm = () => {

    const navigate = useNavigate()

    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description:""
    })

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/products/new', formInfo)
        .then((response) => {
            console.log(response.data.err)
            setFormInfo(formInfo)
            navigate("/")
        })
        .catch(err => console.log('this is a catch err',err))
    }

    return (
        <div>
            <h1>Add a Product</h1>
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="title" className='form-label'>title:</label>
                        <input type="text" className='form-control' name='title' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="price" className='form-label'>price:</label>
                        <input type="text" className='form-control' name='price' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="description" className='form-label'>description:</label>
                        <input type="text" className='form-control' name='description' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ProductForm
