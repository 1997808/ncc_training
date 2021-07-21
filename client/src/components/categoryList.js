import DemoImage from "../assets/pr-23.jpg"
import { CategoryCard } from "../elements/categoryCard"

export const CategoryList = () => {
  return (
    <>
      <CategoryCard image={DemoImage} name={"Shirt"} url={"/"} />
      <CategoryCard image={DemoImage} name={"Short"} url={"/"} />
      <CategoryCard image={DemoImage} name={"Shoes"} url={"/"} />
      <CategoryCard image={DemoImage} name={"Hat"} url={"/"} />
    </>
  );
}