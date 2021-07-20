import Slider1 from '../assets/slider-01.jpg';
import { Button } from '../elements/button'

export const Slider = () => {
  return (
    <div className="relative">
      <img style={{ height: "500px" }} class="object-cover w-full" src={Slider1} alt="img" />
      <div style={{ height: "500px" }} className="absolute left-0 top-0 text-gray-800 flex items-center">
        <div className="ml-5">
          <p>Summer 2021</p>
          <p className="text-5xl font-bold mt-2 mb-4">New Arrival Collection</p>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}