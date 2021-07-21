import React from 'react'
import { ImageSlider } from "../elements/imageSlider"
import { ButtonAddCart } from "../elements/button"

export const ProductImage = ({ name, price, desc, type, category }) => {
  return (
    <>
      <div className="col-span-1 grid grid-cols-4 gap-4">
        <ImageSlider />
      </div>
      <div className="col-span-1">
        <p className="text-xl font-semibold mb-4">{name}</p>
        <p className="text-lg text-gray-500 leading-6 mb-6">{price}</p>
        <p className="text-sm text-gray-500 leading-6 mb-6">{desc} {desc}</p>
        <p className="text-sm text-gray-500 leading-6 mb-4">Type: {type}</p>
        <p className="text-sm text-gray-500 leading-6 mb-8">Categories: {category}</p>
        <ButtonAddCart />
      </div>
    </>
  )
}