import React from 'react'
import i1 from "../../images/ev7.jpg" 
import i2 from "../../images/ev6.jpg"
import i3 from "../../images/ev9.jpg"
import { Content } from '../Content'
const Slider = () => {
  return (
    <>
    <Content/>
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={i1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={i2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={i3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
    </>
  )
}

export default Slider
