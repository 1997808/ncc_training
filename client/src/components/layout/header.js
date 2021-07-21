import {
  Link
} from "react-router-dom";
import { Logo } from "../../assets/svg"
import { SearchIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/outline'

export const Header = () => {
  return (
    <div className="grid grid-flow-col grid-cols-6 gap-4 h-20">
      <div className="col-span-1">
        <div className="h-full flex items-center px-5">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="col-span-4 flex justify-center">
        <ul className="flex h-full">
          <li className="flex items-center px-5"><Link to="/" className="text-base">Home</Link></li>
          <li className="flex items-center px-5"><Link to="/products" className="text-base">Product</Link></li>
          <li className="flex items-center px-5"><Link to="/" className="text-base">Portfolio</Link></li>
          <li className="flex items-center px-5"><Link to="/" className="text-base">Lookbook</Link></li>
          <li className="flex items-center px-5"><Link to="/" className="text-base">Blog</Link></li>
        </ul>
      </div>
      <div className="col-span-1">
        <div className="flex h-full">
          <li className="flex items-center px-3"><SearchIcon className="h-5 w-5 text-gray-500" /></li>
          <li className="flex items-center px-3"><UserIcon className="h-5 w-5 text-gray-500" /></li>
          <li className="flex items-center px-3"><ShoppingCartIcon className="h-5 w-5 text-gray-500" /></li>
        </div>
      </div>
    </div>
  );
}