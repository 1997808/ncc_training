import { ShoppingCartIcon } from "@heroicons/react/outline"

export const Button = () => {
  return (
    <div className="bg-gray-800 h-10 w-40 flex justify-center items-center cursor-pointer">
      <p className="text-white text-sm">Learn more</p>
    </div>
  );
}

export const ButtonWhite = ({ name, url }) => {
  return (
    <div className="h-10 w-40 bg-white flex justify-center items-center cursor-pointer border border-gray-200">
      <p className="text-gray-800 text-sm font-semibold">{name}</p>
    </div>
  );
}

export const ButtonAddCart = ({ url }) => {
  return (
    <div className="h-10 w-40 bg-white transform transition duration-300 hover:bg-gray-800 flex justify-center items-center cursor-pointer rounded-full">
      <ShoppingCartIcon className="w-6 h-6 text-gray-500 transform transition duration-300 hover:text-white" />
    </div>
  );
}