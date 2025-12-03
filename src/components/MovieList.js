import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, list }) => {
    const containerRef = useRef();
    const [isAtLeft,setIsAtLeft] = useState(false);
    const [isAtRight,setIsAtRight] = useState(true);

const scroll = (direction) => {
    const amount = 300;
    
    direction === "left"
      ? (containerRef.current.scrollLeft -= amount)
      : (containerRef.current.scrollLeft += amount);
    if(containerRef?.scrollLeft === 0) setIsAtLeft(false);
    else   setIsAtLeft(true);
    if(containerRef?.scrollLeft + containerRef?.clientWidth >= containerRef?.scrollWidth) setIsAtRight(false)
    else setIsAtRight(true);
    };
  return (
    <div className="bg-transparent px-2 lg:px-10 relative z-10">
      <h1 className="text-xl lg:text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-hidden scroll-smooth"
        ref={containerRef}
      >
        {list?.map((p, i) => {
          return <MovieCard key={i} movie={{}} />;
        })}
      </div>
      <div className="flex justify-between absolute top-[50%] left-[-2px] w-full">
        <button onClick={()=> scroll("left")} className={`px-4 ml-5 py-2 bg-white rounded-3xl text-2xl font-bold ${!isAtLeft ? `opacity-0` : `opacity-100`}`}>{"<"}</button>
        <button onClick={()=> scroll("right")} className={`px-4 mr-5 py-2 bg-white rounded-3xl text-2xl font-bold ${!isAtRight ? `opacity-0` : `opacity-100`}`}>{">"}</button>
      </div>
    </div>
  );
};

export default MovieList;
