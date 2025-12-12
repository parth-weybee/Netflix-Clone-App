import { useEffect } from "react";
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import MainMovie from './MainMovie';
import GptSearch from "./GptSearch";
import { constantMovieList, TMDB_URL } from "../utils/constants";
import { setMovieList } from "../utils/movieListsSlice";
import MovieList from "./MovieList";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const list = useSelector(store => store.movieLists);
  const fetchMovies = async (name,url)=>
  {
    const res = await fetch(TMDB_URL + url ,{
      headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_TMDB_AUTHORIZATION_KEY,
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    dispatch(setMovieList({name,list: data.results}));
  }
  useEffect(()=>{
    if(!user)
    {
      navigate("/auth");
    }
    constantMovieList.forEach(element => {
      fetchMovies(element.name,element.url);
    });
  },[]);
  return (
    <>
      <Header />
      {showGptSearch ? <GptSearch/> : 
      <>
      {list["nowPlaying"] && <MainMovie movie={list["nowPlaying"][14]}/>}
        <div className="bg-black">
          {/* <MovieList title={"popular"} list={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}/>
          <MovieList title={"Now Trending"} list={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}/> */}
          {/* {list && <MovieList title={"popular"} list={list['popular']}/>} */}
          {constantMovieList?.map(ele=> 
            (list[ele.name] && <MovieList key={ele.name} title={ele.title} list={list[ele.name]}/>)
          )}  
        </div>
      </>
      }
    </>
  )
}

export default Browse;