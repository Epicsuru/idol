import React, { Component } from "react";
import Slider from "react-slick";
import './cards.css';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <h3>FEATURED OBJECTS</h3>
        <Slider {...settings}>
          <div>
            <img className="img" src="https://thumbs.dreamstime.com/b/lord-vishnu-chakradhari-stone-idol-th-century-ad-tikamgarh-madhya-pradesh-india-lord-vishnu-chakradhari-standing-form-idol-india-133327329.jpg" alt=" " />
          </div>
          <div>
            <img className="img" src="https://st4.depositphotos.com/16173130/19896/i/600/depositphotos_198964394-stock-photo-carved-stone-idol-displayed-art.jpg" alt="" />
          </div>
          <div>
          <img className="img" src="https://c8.alamy.com/comp/C22951/fine-image-of-ganesh-indian-stone-god-and-smoke-C22951.jpg" alt="" />
         </div>
          <div>
          <img className="img" src="https://www.dsource.in/sites/default/files/gallery/3621/1.jpg" alt="" />
         </div>
          <div>
            <img className="img" src="https://c8.alamy.com/comp/C22951/fine-image-of-ganesh-indian-stone-god-and-smoke-C22951.jpg" alt="" />
          </div>
          <div>
         <img className="img" src="https://5.imimg.com/data5/FY/EH/UZ/SELLER-1709532/shirdi-sai-baba-marble-murti-500x500.jpg" alt="" />
          </div>
          <div>
            <img className="img" src="https://c8.alamy.com/comp/BXR7WP/granite-stone-hanuman-statue-worshiped-hindu-indian-deity-BXR7WP.jpg" alt="" />
          </div>
          <div>
          <img className="img" src="https://thumbs.dreamstime.com/b/home-made-eco-friendly-ganesha-ganpati-idol-ganesh-chaturthi-festival-homemade-lord-ganesha-idol-ganapati-bappa-murti-194048268.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}