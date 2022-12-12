import React, {useEffect, useState} from "react"
import axios from 'axios';
import { Link } from "react-router-dom";

const PetList = () => {
  
  const [Pets, setPets] = useState([])
  const [deleteClicked, setDeleteClicked] = useState(false)

  useEffect(() =>{
    axios.get(`http://localhost:8000/api/Pet`)
    .then((response) =>{
      console.log(response.data);
      setPets(response.data);
    })
    .catch((err) => { console.log("this is your catch error:", err)})
  }, [deleteClicked])

  const deletePet = (e, id) => {
    console.log("delete this pet", id)
    axios.delete(`http://localhost:8000/api/Pet/delete/${id}`) 
    .then((response) =>{
      console.log("Delete was a success", response)
      setDeleteClicked(!deleteClicked)
    })
  }
  
  return (
    <><div>
            <h1>Pet Shop</h1>
            <h3><Link to={'/api/Pet/new'}>Add Pet</Link></h3>
        </div><table className="table mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Pets.sort((a,b) => a.type.localeCompare(b.type)).map((pets, i) => {
                        return (
                            <tr key={i}>
                                <td><Link to={`/api/Pet/${pets._id}`} className='btn btn-outline-dark'>{pets.name}</Link></td>
                                <td>{pets.type}</td>
                                <td>{pets.description}</td>
                                <td><Link to={`/api/Pet/update/${pets._id}`} className="btn btn-warning">Edit</Link>| 
                                <button to className="btn btn-danger" onClick={(e) => {deletePet(e, pets._id)}}>Adopt</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table></>
  );
}

export default PetList;