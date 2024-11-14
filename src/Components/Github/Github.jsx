import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/itstijnam')
        .then((response)=> response.json())
        .then((data)=>{
            setData(data);
        })
    }, [])
  return (
    <div 
    
    className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >
    <p>Github Followers : {data.followers}</p>
    <img src={data.avatar_url} alt="Manjit Photo" />
    </div>
  )
}

export default Github
