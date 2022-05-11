import React from "react";
import { Carousel } from "antd";

function CarouselDisplay() {
  return (
    <div className="col-md-12 h-100">

      <Carousel>
        <div>
          <h3 style={{ backgroundColor: "red", height: '50vh' }}>Item 1</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "blue", height: '50vh' }}>Item 2</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "yellow", height: '50vh' }}>Item 3</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselDisplay;
