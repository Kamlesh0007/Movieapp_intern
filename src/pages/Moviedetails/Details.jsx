import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './style.scss'
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import BookingForm from "./BookingForm";

import dayjs from "dayjs";

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
    const handleBookNow = () => {
        setShowForm(true);
      };
    
      const closeBookNow = () => {
        setShowForm(false);
      };
    

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`).then((response) => {
            setMovie(response.data);
        });
    }, [id]);

    return (

        <div className="detailsBanner">
            {movie ? (
                <>
                    {movie && (
                        <React.Fragment>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                        <img className="posterImg" src={movie.image.medium} alt={movie.name} />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            {`${movie.name
                                                } (${dayjs(
                                                    movie?.premiered
                                                ).format("YYYY")})`}
                                        </div>
                                        <div className="genres">
                                            {movie.genres.map((g) => {
                                                return (
                                                    <div key={g} className="genre">
                                                        {g}
                                                        {console.log(g)}
                                                    </div>
                                                );
                                            })}

                                        </div>






                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                                {movie.summary.replace(/<(.|\n)*?>/g, '')}

                                            </div>
                                        </div>

                                        <div className="info">
                                            {movie.status && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Status:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {movie.status}
                                                    </span>
                                                </div>
                                            )}
                                            {movie.premiered && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Release Date:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {dayjs(
                                                            movie.premiered
                                                        ).format("MMM D, YYYY")}
                                                    </span>
                                                </div>
                                            )}
                                            {movie.runtime && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Runtime:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {toHoursAndMinutes(
                                                            movie.runtime
                                                        )}
                                                    </span>
                                                </div>
                                            )}
                                              <div className="bbutton" onClick={handleBookNow}>Book Now</div>

                                        </div>





                                      

                                    </div>
                                </div>
                                {showForm && <BookingForm movie={movie.name}  closeForm={closeBookNow}/>}

                            </ContentWrapper>
                        </React.Fragment>
                    )}
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                    <span class="loader"></span>
                    </ContentWrapper>
                </div>
            )}
        </div>

    );
};

export default Details;
