import { Slider } from "../../components/slider"
import { CategoryList } from "../../components/categoryList"
import { Trending } from "../../components/trending"
import { Banner } from "../../components/banner"
import { OurProduct } from "../../components/ourProduct"
import { PolicyList } from "../../components/policyList"


export const ProductList = () => {
  return (
    <div>
      <Slider />
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-4 gap-8 mb-16">
          <CategoryList />
        </div>
        <div className="mb-16">
          <Trending />
        </div>
        <div className="mb-16">
          <OurProduct />
        </div>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <Banner />
        </div>
        <div className="grid grid-cols-4 gap-8 mb-8">
          <PolicyList />
        </div>
      </div>
    </div>
  );
}