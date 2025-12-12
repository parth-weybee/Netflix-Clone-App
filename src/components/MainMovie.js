import { useEffect, useState } from "react";
import MainMovieBgVideo from "./MainMovieBgVideo";
import MainMovieTitle from "./MainMovieTitle";
import { TMDB_URL } from "../utils/constants";


const MainMovie = ({movie})=>
{
    const [video,setVideo] = useState(null);
    const fetchMainMovieVideo = async ()=>
    {
        const res = await fetch(TMDB_URL + movie?.id + "/videos", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + process.env.REACT_APP_TMDB_AUTHORIZATION_KEY
            }
        });
        const data = await res.json();
        const video = data?.results?.filter((video) => video?.name.includes("Official Trailer"))[0];
        setVideo(video);
    }
    useEffect(()=>
    {
        fetchMainMovieVideo();
    },[])
    return (
        <>
            <MainMovieTitle title={movie?.title} overview={movie.overview}/>
            <MainMovieBgVideo video={video}/>
        </>
    )
}

export default MainMovie;