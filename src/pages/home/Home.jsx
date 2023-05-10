
import './style.scss'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows").then((response) => {
      setShows(response.data);
      console.log(response.data)
    });

  }, []);
  return (
   
    <div className='homePage'> 
    <h2>Trending</h2>    
      <div className='items'>
      <Slider {...settings}>
    
        {shows.map((show) => (
          <div className="item" key={show.id}>

            <img src={show.image.medium} alt={show.name} />
            <div className='showname'>
              <h3>{show.name}</h3>
              <div className="other">
              <span className="date">
                {dayjs(show.premiered).format(
                  "MMM D, YYYY"
                )}
              </span>
              <span className="button"  onClick={() =>
                           navigate(`/Details/${show.id }`)}>
  
              Read More
            
            </span>
              </div>
            
            </div>
            <div className="genres">
              {show.genres.map((g) => {
                return (
                  <div key={g} className="genre">
                    {g}
                    {console.log(g)}
                  </div>
                );
              })}
     
            </div>
           
           

          </div>
        ))}

</Slider>

      </div>


    </div>

  )
}

export default Home