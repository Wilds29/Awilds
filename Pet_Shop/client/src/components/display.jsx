import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Display = () => {
  const [Pets, setPets] = useState([])
  const { id } = useParams()
  const [deleteClicked, setDeleteClicked] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Pet/${id}`)
      .then((response) => {
        console.log(response.data)
        setPets(response.data)
      })
  }, [id], [deleteClicked])

  const deletePet = (e, id) => {
    console.log("delete this pet", id)
    axios.delete(`http://localhost:8000/api/Pet/delete/${id}`)
      .then((response) => {
        console.log("Delete was a success", response)
        setDeleteClicked(!deleteClicked)
        navigate("/")
      })
  }

  const LikeButtonCompoent = () => {
    const [like, setLike] = useState(1),
      [isLike, setIsLike] = useState(false),
      onLikeButtonClick = () => {
        setLike(like + (isLike ? -1 : 1));
        setIsLike(!isLike);
      };

    return (
      <>
        <h1>here is our Pet</h1>
        <p><button to className="btn btn-danger" onClick={(e) => { deletePet(e, Pets._id) }}>Adopt</button></p>
        <p><Link to={`/`} className='btn btn-outline-success'>Home</Link></p>
        <div className='card'>
          <h1>{Pets.name}</h1>
          <p>type: {Pets.type}</p>
          <p>description: {Pets.description}</p>
          <p>Skills: {Pets.skill1},{Pets.skill2},{Pets.skill3} </p>
          <div className='btn btn-blue'>
          <button

            onClick={onLikeButtonClick} disabled={true}
          >
            {"Like"} | {like}
          </button>
          </div>
        </div>
      </>
    )
  }
  return <LikeButtonCompoent />
}


export default Display

