import React from "react";
import Image from "next/image";

interface IProps {
  title: string;
  release_date: string;
  poster: string;
  keyProp: string;
}

const MovieCard = ({ title, release_date, poster, keyProp }: IProps) => {
  return (
    <div className="movie-card w-[130px]" key={keyProp}>
      <div className="movie-poster rounded ">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="poster"
          height={250}
          width={180}
          className="rounded "
        />
      </div>
      <div className="text-sm text-light-1 truncate hover:text-clip">
        {title}
      </div>
      <div className="text-xs text-gray-1 text-center">
        {release_date.slice(0, 4)}
      </div>
    </div>
  );
};

export default MovieCard;
