import { ButtonWhite } from "./button"

export const CategoryCard = ({ image, name, url }) => {
  return (
    <>
      <div className="relative col-span-1 w-full">
        <img src={image} alt="img" class="object-cover w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-end">
          <div className="mb-5">
            <ButtonWhite name={name} url={url} />
          </div>
        </div>
      </div>
    </>
  );
}