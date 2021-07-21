import React from 'react'
import { RecentlyViewed } from "../../components/recentlyViewed"
import { ProductDesc } from "../../components/productDesc"
import { ProductImage } from "../../components/productImage"


export const ProductDetail = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-2 gap-8 mb-16">
          <ProductImage />
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