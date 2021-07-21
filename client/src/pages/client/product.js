import React, { useState } from 'react'
import { ProductBanner } from "../../components/banner"
import { ProductList } from "../../components/productList"
import { Filter } from "../../components/filter"
import { SortProduct } from "../../elements/sort"

export const Product = () => {
  const [sort, setSort] = useState("")
  console.log(sort)
  const handleSort = (e) => {
    setSort(e.target.value)
  }
  return (
    <div>
      <ProductBanner name={"Women"} />
      <div className="container mx-auto mt-8">
        <div className="flex justify-end mb-8">
          <SortProduct value={sort} handleSort={handleSort} />
        </div>
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div className="col-span-1">
            <Filter />
          </div>
          <div className="col-span-3">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}