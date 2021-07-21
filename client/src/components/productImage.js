import React from 'react'
import { ImageSlider } from "../elements/imageSlider"

const Info = ({ name, price, desc, type, category }) => {
  return (
    <>
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-500 leading-6">{price}</p>
      <p className="text-sm text-gray-500 leading-6">{desc}</p>
      <p className="text-sm text-gray-500 leading-6">{type}</p>
      <p className="text-sm text-gray-500 leading-6">{category}</p>
    </>
  )
}

export const ProductImage = () => {
  return (
    <>
      <div className="col-span-1 grid grid-cols-4 gap-4">
        <ImageSlider />
      </div>
      <div className="col-span-1">
        <Info />
      </div>
    </>
  )
}