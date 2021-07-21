import { ProductCard } from '../elements/productCard'
import DemoImage from "../assets/pr-18.jpg"

export const ProductList = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />

        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />
        <ProductCard image={DemoImage} name={"Analogue Strap"} price={34} />

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