import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'
const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft +=   500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -=   500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer z-10"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <IoChevronForwardOutline
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div ref={elementRef} className="flex overflow-x-auto scrollbar-none gap-8 py-5 px-3 scroll-smooth z-10">
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
