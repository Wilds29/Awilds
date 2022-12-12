import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setFormInfo(response.data);
            })
            .catch((err) => { console.log("this is your catch error: ", err) })
    }, [id])

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/products/${id}/edit`, formInfo)
        .then((response) =>{
            console.log("here are the results updated",response)
            navigate("/")
        })
        .catch(err => console.log("here is catch error: ", err))
    }


  return (
    <div>Edit
        <div className='container'>
                <form onSubmit={submitHandler}>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="title" className='form-label'>title:</label>
                        <input type="text" className='form-control' name='title' value={formInfo.title} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="price" className='form-label'>price:</label>
                        <input type="text" className='form-control' name='price' value={formInfo.price} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="description" className='form-label'>description:</label>
                        <input type="text" className='form-control' name='description' value={formInfo.description} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Edit