import React from 'react';
import image1 from '../../../assets/BANNER1.jpg';
import image2 from '../../../assets/BANNER2.jpg';
import image3 from '../../../assets/BANNER3.jpg';
import image4 from '../../../assets/bannner2.jpeg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={image1} className="w-full h-[600px]" />
  </div> 
  <div id="item2" className="carousel-item w-full">
  <img src={image2} className="w-full h-[600px]" />
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img src={image3} className="w-full h-[600px]" />
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img src={image4} className="w-full h-[600px]" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn  bg-blue-600 text-slate-50">1</a> 
  <a href="#item2" className="btn  bg-blue-600 text-slate-50">2</a> 
  <a href="#item3" className="btn  bg-blue-600 text-slate-50">3</a> 
  <a href="#item4" className="btn  bg-blue-600 text-slate-50">4</a>
</div>
        </div>
    );
};

export default Banner;