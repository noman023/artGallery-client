import mountain from "../../assets/mountain_view_canvas.jpg";
import forest from "../../assets/forest_art.jpg";
import mountainArt from "../../assets/mountain_art.jpg";

export default function Slider() {
  return (
    <>
      <div className="carousel w-full mt-10">
        <div id="item1" className="carousel-item w-full relative max-h-[600px]">
          <img src={mountain} className="w-full rounded-3xl" />

          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nature's Majesty
            </h2>
            <p className="md:text-lg text-center">
              Explore scenic landscapes on canvas.
            </p>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full relative max-h-[600px]">
          <img src={forest} className="w-full rounded-3xl" />

          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Timeless Portraits
            </h2>
            <p className="md:text-lg text-center">
              Capture memories in stunning detail.
            </p>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full relative max-h-[600px]">
          <img src={mountainArt} className="w-full rounded-3xl" />

          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Creative Essentials
            </h2>
            <p className="md:text-lg text-center">
              Tools to inspire your inner artist.
            </p>
          </div>
        </div>
        {/* 
        <div id="item3" className="carousel-item w-full">
          <img src={mountainArt} className="w-full rounded-3xl" />
          <div>
            <h1>Creative Essentials</h1>
            <p>Tools to inspire your inner artist.</p>
          </div>
        </div> */}
      </div>

      <div className="flex justify-center w-full py-2 gap-2 mb-10">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </>
  );
}
