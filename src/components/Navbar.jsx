import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 bg-gray-800  text-white items-center'>
        <h1 className='text-2xl font-bold'>Perfumey</h1>
        <ul className='flex gap-2'>
            <li><a href="">Home</a> |</li>
            <li><a href="">Products</a> |</li>
            <li><a href="">About</a> |</li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar