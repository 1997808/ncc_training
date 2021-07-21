import React from 'react'
import { RecentlyViewed } from "../../components/recentlyViewed"
import { ProductDesc } from "../../components/productDesc"
import { ProductImage } from "../../components/productImage"


export const ProductDetail = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-2 gap-8 mb-16">
          <ProductImage
            name={"Leather White Trainers"}
            price={"$20.00"}
            desc={"Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe."}
            type={"All, Short"}
            category={"Shorto Gun"}
          />
        </div>
      </div>
      <div className="mb-16">
        <ProductDesc />
      </div>
      <div className="container mx-auto">
        <div className="mb-16">
          <RecentlyViewed />
        </div>
      </div>
    </div>
  );
}