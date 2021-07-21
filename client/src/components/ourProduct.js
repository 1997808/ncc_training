import { ProductCard } from '../elements/productCard'
import DemoImage from "../assets/pr-18.jpg"

export const OurProduct = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-2xl text-gray-800 font-semibold uppercase">Our Product</p>
        <p className="text-base text-gray-500 italic">Top view in this week</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-8 pt-8">
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
      </div>
    </>
  );
}