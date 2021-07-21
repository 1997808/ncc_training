import {
  Link
} from "react-router-dom";
import { ButtonCartIcon } from "./button"

export const ProductCard = ({ image, name, price }) => {
  return (
    <Link to='/product/123'>
      <div className="col-span-1 w-full">
        <div className="relative group w-full overflow-hidden">
          <img src={image} alt="img" className="object-cover w-full transform transition duration-500 group-hover:scale-110" />
          <div className="absolute w-full h-full left-0 top-0 bg-black opacity-0 transform transition duration-500 group-hover:opacity-10">
          </div>
          <div className="absolute w-full h-full left-0 top-0 text-white opacity-0 transform transition duration-300 group-hover:opacity-100">
            <div className="flex flex-col justify-center items-center h-full">
              <ButtonCartIcon />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-800 text-sm font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">${price}.00</p>
        </div>
      </div>
    </Link>
  );
}