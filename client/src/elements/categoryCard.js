import { ButtonWhite } from "./button"

export const CategoryCard = ({ image, name, url }) => {
  return (
    <>
      <div className="group relative col-span-1 w-full">
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt="img" class="object-cover w-full transform transition duration-500 group-hover:scale-110" />
        </div>
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-end">
          <div className="mb-5">
            <ButtonWhite name={name} url={url} />
          </div>
        </div>
      </div>
    </>
  );
}