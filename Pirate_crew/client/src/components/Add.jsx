import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PirateForm = () => {

    const navigate = useNavigate()

    const [formInfo, setFormInfo] = useState({
        pirate_name:"",
        image:"",
        treasure:"",
        crew_position:"",
        catch_phrase:""
    })

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pirate/new', formInfo)
        .then((response) => {
            console.log(response.data.err)
            setFormInfo(formInfo)
            navigate("/")
        })
        .catch(err => console.log('this is a catch err',err))
    }

    return (
        <div>
            <h1>New Pirate</h1>
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="pirate_name" className='form-label'>name:</label>
                        <input type="text" className='form-control' name='pirate_name' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="image" className='form-label'>image:</label>
                        <input type="text" className='form-control' name='image' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="treasure" className='form-label'>treasure:</label>
                        <input type="text" className='form-control' name='num_of_treasure' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                    <label htmlfor="crew_position" name='crew_position'>Crew Position: </label>
                <select onChange={onChangeHandler} name="crew_position">
                    <option value="First Mate">First Mate</option>
                    <option value="Captain">Captain</option>
                    <option value="Quarter Master">Watcher</option>
                    <option value="Boatswain">Gorilla</option>
                    <option value="Powder Monkey">captains cat</option>
                </select>
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor="catch_phrase" className='form-label'>catch_phrase:</label>
                        <input type="text" className='form-control' name='catch_phrase' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default PirateForm
