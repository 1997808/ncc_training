import {
  Link
} from "react-router-dom";
import { Logo } from "../../assets/svg"

export const Footer = () => {
  return (
    <div className="bg-gray-100 h-96 pt-20 pb-8">
      <div className="container grid grid-flow-col grid-cols-6 gap-4 h-full mx-auto">
        <div className="col-span-2">
          <div className="h-full px-5">
            <div className="mb-5">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="text-sm text-gray-500 leading-6">
              We are a skilled team of professionals in the field of software development. We use our passion for development to deliver the best software applications. With the combination of technology, know-how and great communication, we are able to create complete solutions for our clients.
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <ul className="h-full px-5">
            <li className="mb-5"><h3 className="text-base font-semibold">Categories</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Shirt</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Dress</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Denim</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Shoes</h3></li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="h-full px-5">
            <li className="mb-5"><h3 className="text-base font-semibold">Infomation</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">About Us</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Contact Us</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Terms</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Exchanges</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Delivery</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Privacy Policy</h3></li>
          </ul>
        </div>
        <div className="col-span-2">
          <ul className="h-full px-5">
            <li className="mb-5"><h3 className="text-base font-semibold">Contact Us</h3></li>
            <li className="my-2">
              <h3 className="text-sm text-gray-500 leading-6">Get connected! We would love to hear from you. Please fill in the form below, leave a message and we will contact with you as soon as possible.</h3>
            </li>
            <li className="my-2">
              <h3 className="text-sm text-gray-500 leading-6">Address: 184 Main Rd E, St Albans
                VIC 3021, Australia</h3>
            </li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Mail: contact@company.com</h3></li>
            <li className="my-2"><h3 className="text-sm text-gray-500 leading-6">Phone: +001 2233 456</h3></li>
          </ul>
        </div>
      </div>
    </div>
  );
}