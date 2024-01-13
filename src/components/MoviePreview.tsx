import React from 'react'

type TMoviePreview = {
  Poster: string,
  Title: string,
  Year: string,
  imdbID: string
}

const MoviePreview = ({Poster, Title, Year, imdbID}: TMoviePreview) => {
  return (
    <article className='flex flex-col p-3 text-white rounded-xl bg-[#361f36] hover:border'>
      <div className="img">
        <img src={Poster} alt="Poster" />
      </div>
      <div className='p-1'>
        <h3 className='font-semibold'>{Title}</h3>
        <div className='mt-2 opacity-60'>{Year}г</div>
      </div>
    </article>
  )
}

export default MoviePreview