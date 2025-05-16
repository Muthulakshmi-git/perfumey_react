import React from 'react';
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";


const Products = () => {
  return (
    <div className='flex justify-center gap-2'>
        <div className='w-40 border border-gray-700'>
            <img className=" " src= {img1} alt="image1" />
            <p className='p-2'>Lorem ipsum dolor sit, amet consectetur aat deserunt debitis maxime earum?</p>
        </div>
        <div className='w-40 border  border-gray-700'>
            <img className="w-40 h-60" src= {img2} alt="image2" />
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing eli.</p>
        </div>
        <div className='w-40 border  border-gray-700'>
            <img className="h-60" src= {img3} alt="image3" />
            <p className='p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, culpa!</p>
        </div>
    </div>
  )
}

export default Products