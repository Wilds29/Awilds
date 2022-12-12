import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Pet/${id}`)
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
        axios.put(`http://localhost:8000/api/Pet/update/${id}`, formInfo)
        .then((response) => {
            console.log("here is the updated results", response)
            navigate("/")
        })
        // .catch(err => console.log('this is a catch err',err))
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
            <h1>Edit a Pet</h1>
            <p><Link to={`/`} className='btn btn-outline-success'>Home</Link></p>
            <div className='container'>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <form onSubmit={submitHandler}>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="name" className='form-label'>name:</label>
                        <input type="text" className='form-control' name='name' value={formInfo.name} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="type" className='form-label'>type:</label>
                        <input type="text" className='form-control' name='type' value={formInfo.type} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="description" className='form-label'>description:</label>
                        <input type="text" className='form-control' name='description' value={formInfo.description} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="skills" className='form-label'>Skill-1:</label>
                        <input type="text" className='form-control' name='skill1' value={formInfo.skill1} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="skills" className='form-label'>Skill-2:</label>
                        <input type="text" className='form-control' name='skill2' value={formInfo.skill2} onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="skills" className='form-label'>Skill-3:</label>
                        <input type="text" className='form-control' name='skill3' value={formInfo.skill3} onChange={onChangeHandler} />
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