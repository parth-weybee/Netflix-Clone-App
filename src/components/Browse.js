import { useEffect } from "react";
import Header from "./Header"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import MainMovie from './MainMovie';
import MovieList from './MovieList';
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  useEffect(()=>{
    if(!user)
    {
      navigate("/auth");
    }
  },[]);
  return (
    <>
      <Header />
      {showGptSearch ? <GptSearch/> : 
      <>
      <MainMovie/>
        <div className="bg-black">
          <MovieList title={"Now Trending"} list={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}/>
          <MovieList title={"Now Trending"} list={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}/>
        </div>
      </>
      }
    </>
  )
}

export default Browse;