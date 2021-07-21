import { ProductCard } from '../elements/productCard'
import DemoImage from "../assets/pr-12.jpg"

export const Trending = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-2xl text-gray-800 font-semibold uppercase">Trending</p>
        <p className="text-base text-gray-500 italic">Top sale in this week</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-8 pt-8">
        <ProductCard image={DemoImage} name={"Analogue Resin Strap"} price={40} />
        <ProductCard image={DemoImage} name={"Analogue Resin Strap"} price={40} />
        <ProductCard image={DemoImage} name={"Analogue Resin Strap"} price={40} />
        <ProductCard image={DemoImage} name={"Analogue Resin Strap"} price={40} />
      </div>
    </>
  );
}