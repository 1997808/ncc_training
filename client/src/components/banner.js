import Banner1 from '../assets/bn-05.jpg';
import Banner2 from '../assets/bn-06.jpg';

import ShopBanner from '../assets/shop-banner.jpg';

export const PromoteBanner = () => {
  return (
    <>
      <div className="relative col-span-1">
        <img className="object-cover w-full h-60" src={Banner1} alt="img" />
        <div className="absolute w-full h-60 left-0 top-0 text-white">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-2xl font-semibold uppercase">Lookbook 2021</p>
            <p className="text-base mt-2 mb-4 uppercase">Make this book beautiful</p>
          </div>
        </div>
      </div>

      <div className="relative col-span-1">
        <img className="object-cover w-full h-60" src={Banner2} alt="img" />
        <div className="absolute w-full h-60 left-0 top-0 text-white">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="uppercase">Summer Sale</p>
            <p className="text-5xl font-bold mt-2 mb-4">UP TO 70%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const ProductBanner = ({ name }) => {
  return (
    <div className="relative">
      <img class="object-cover h-40 w-full" src={ShopBanner} alt="img" />
      <div className="absolute h-40 w-full left-0 top-0 bg-black opacity-50">

      </div>
      <div className="absolute h-40 w-full left-0 top-0 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-white">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-sm mt-1">Shop through our latest selection of Women’s Clothing and Accessories.</p>
        </div>
      </div>
    </div>
  );
}