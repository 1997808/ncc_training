import { ProductCard } from '../elements/productCard'

export const Trending = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-2xl text-gray-800 font-semibold">Trending</p>
        <p className="text-base text-gray-500 italic">Top sale in this week</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-8 py-8">
        <ProductCard name={"Analogue Resin Strap"} price={40} />
        <ProductCard name={"Analogue Resin Strap"} price={40} />
        <ProductCard name={"Analogue Resin Strap"} price={40} />
        <ProductCard name={"Analogue Resin Strap"} price={40} />
      </div>
    </>
  );
}