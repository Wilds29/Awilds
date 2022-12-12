import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PetForm = () => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState([]);

    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:"",
        skills:""
    })

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/Pet/new', formInfo)
        .then((response) => {
            console.log(response.data.err)
            setFormInfo(formInfo)
            navigate("/")
        })
        // .catch(err => console.log('this is a catch err',err))
        .then(res=>console.log(res)) // If successful, do something with the response. 
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <h1>Add a Pet</h1>
            <p><Link to={`/`} className='btn btn-outline-success'>Home</Link></p>
            <div className='container'>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <form onSubmit={submitHandler}>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="name" className='form-label'>name:</label>
                        <input type="text" className='form-control' name='name' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="type" className='form-label'>type:</label>
                        <input type="text" className='form-control' name='type' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="description" className='form-label'>description:</label>
                        <input type="text" className='form-control' name='description' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="skills" className='form-label'>Skill-1:</label>
                        <input type="text" className='form-control' name='skill1' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="skills" className='form-label'>Skill-2:</label>
                        <input type="text" className='form-control' name='skill2' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="skills" className='form-label'>Skill-3:</label>
                        <input type="text" className='form-control' name='skill3' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default PetForm