import React, {useEffect, useState} from 'react'
import axios from 'axios';

const PollsList = () => {

    const [Polls, setPolls] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/Polls`)
        .then((response) =>{
          console.log(response.data);
          setPolls(response.data);
        })
        .catch((err) => { console.log("this is your catch error:", err)})
      },)

  return (
    <div className='container'>
        {Polls.sort((a,b) => a.type.localeCompare(b.type)).map((polls, i) => {
            return(
                
            )
    })}
    </div>
  )
}

export default PollsList
