import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"




const PirateList = () => {

    const [allPirates, setPirate] = useState([])
    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates`)
            .then((response) => {
                console.log(response.data.results);
                setPirate(response.data.results);
            })
            .catch((err) => { console.log("this is your catch error: ", err) })
    }, [deleteClicked])

    const deletePirate = (e, id) => {
        console.log("delete this pirate", id)
        axios.delete(`http://localhost:8000/api/pirate/${id}/delete`)
            .then((response) => {
                console.log("Delete was a success", response)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err => console.log(err))
    }

    return (
        <><div>
            <h1>Pirates</h1>
            <h3><Link to={'/api/pirate/new'}>Add Pirate</Link></h3>
        </div><table className="table mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>image</th>
                        <th>treasure</th>
                        <th>Crew position</th>
                        <th>Catch phrase</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPirates.map((pirate, i) => {
                        return (
                            <tr key={i}>
                                <td><Link to={`/api/pirate/${pirate._id}`} className='btn btn-outline-dark'>{pirate.pirate_name}</Link></td>
                                <td> <img src={pirate.image} alt="pirate pic" height="100px" />  </td>
                                <td>{pirate.num_of_treasure}</td>
                                <td>{pirate.crew_position}</td>
                                <td>{pirate.catch_phrase}</td>
                                <td><Link to={`/api/pirate/${pirate._id}/edit`} className="btn btn-warning">Edit</Link>|
                                    <button to className="btn btn-danger" onClick={(e) => { deletePirate(e, pirate._id) }}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table></>
    )
}

export default PirateList