const CategoryFilter = ({ name }) => {
  return (
    <li className="my-2"><h3 className="text-sm leading-6">{name}</h3></li>
  )
}

export const Signup = () => {
  return (
    <>
      <ul className="w-full text-gray-800 mb-8">
        <li><h3 className="text-lg font-semibold">Product Categories</h3></li>
        <hr className="h-0 w-14 mb-5 border-t-2 border-gray-800" />
        <CategoryFilter name={"Shirt"} />
        <CategoryFilter name={"Dress"} />
        <CategoryFilter name={"Denim"} />
        <CategoryFilter name={"Shoes"} />
        <CategoryFilter name={"Shirt"} />
        <CategoryFilter name={"Dress"} />
        <CategoryFilter name={"Denim"} />
        <CategoryFilter name={"Shoes"} />
      </ul>

      <ul className="w-full text-gray-800">
        <li><h3 className="text-lg font-semibold">Filter by price</h3></li>
        <hr className="h-0 w-14 mb-5 border-t-2 border-gray-800" />
        <CategoryFilter name={"$50-$100"} />
        <CategoryFilter name={"$100-$200"} />
        <CategoryFilter name={"$200-$300"} />
        <CategoryFilter name={"$300-$400"} />
      </ul>
    </>
  );
}