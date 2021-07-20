import { Slider } from "../../components/slider"
import { Trending } from "../../components/trending"
import { Banner } from "../../components/banner"

export const Home = () => {
  return (
    <div>
      <Slider />
      <div className="container mx-auto mt-8">
        <Trending />
        <div className="grid grid-cols-2 gap-8 mt-8 mb-16">
          <Banner />
        </div>
        <Trending />
      </div>
    </div>
  );
}