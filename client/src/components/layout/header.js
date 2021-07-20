import { Logo } from "../../assets/svg"
import { SearchIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/outline'

export const Header = () => {
  return (
    <div className="grid grid-flow-col grid-cols-6 gap-4 h-20">
      <div className="col-span-1">
        <div className="h-full flex items-center px-5">
          <Logo />
        </div>
      </div>
      <div className="col-span-4 flex justify-center">
        <ul className="flex h-full">
          <li className="flex items-center px-5"><h3 className="text-base">Home</h3></li>
          <li className="flex items-center px-5"><h3 className="text-base">Product</h3></li>
          <li className="flex items-center px-5"><h3 className="text-base">Portfolio</h3></li>
          <li className="flex items-center px-5"><h3 className="text-base">Lookbook</h3></li>
          <li className="flex items-center px-5"><h3 className="text-base">Blog</h3></li>
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