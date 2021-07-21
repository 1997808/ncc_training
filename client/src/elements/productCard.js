export const ProductCard = ({ image, name, price }) => {
  return (
    <div className="col-span-1 w-full">
      <img src={image} alt="img" class="object-cover w-full" />
      <div className="mt-4">
        <p className="text-gray-800 text-sm font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">${price}.00</p>
      </div>
    </div>
  );
}