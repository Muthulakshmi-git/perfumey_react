import React from 'react'

const Searchbar = () => {
  return (
    <div className='mx-10 my-10 flex '>
        <input  className='p-1 border border-gray-500 flex-1 outline-none hover:outline-none' type="text" placeholder='Search' />
    </div>
  )
}

export default Searchbar