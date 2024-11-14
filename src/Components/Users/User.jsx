import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='text-3xl bg-gray-700 p-4 text-center text-white'>
        user:{userid}
    </div>
  )
}

export default User
