
import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    // <div >
        <img className='w-full h-full m-2' src={IMG_URL + movie?.poster_path} alt="Movie Img" />
    // </div>
  )
}

export default MovieCard