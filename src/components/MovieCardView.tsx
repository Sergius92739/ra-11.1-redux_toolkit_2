import React from 'react'

type TMovieCardView = {
  Poster: string,
  Title: string,
  Year: string,
  Genre: string,
  Runtime: string,
  Director: string,
  Actors: string,
  imdbRating: string
}

const MovieCardView = (props: TMovieCardView): JSX.Element => {
  const { Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating } = props;
  return (
    <article className='flex p-3 bg-[#260f26]'>
      <div className="img">
        <img src={Poster} alt="Poster" />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex p-2">
          <div className="pt-1.5 flex-1">Название:</div>
          <h3 className='text-xl ml-5 font-semibold'>{Title}</h3>
        </div>
        <div className="flex p-2">
          <div className="pt-1.5 flex-1">Год:</div>
          <h3 className='text-xl ml-5 font-semibold'>{Year}</h3>
        </div>
        <div className="flex p-2">
          <div className="pt-1.5 flex-1">Жанр:</div>
          <h3 className='text-xl ml-5 font-semibold'>{Genre}</h3>
        </div>
        <div className="flex p-2">
          <div className="pt-1.5 flex-1">Продолжительность:</div>
          <h3 className='text-xl ml-5 font-semibold'>{Runtime}</h3>
        </div>
        <div className="flex p-2">
          <div className="pt-1.5 flex-1">Режисёр:</div>
          <h3 className='text-xl ml-5 font-semibold'>{Director}</h3>
        </div>
        <div className="flex p-2">
          <div className="pt-1.5 flex-1">Актёры:</div>
          <h3 className='text-xl ml-5 font-semibold'>{Actors}</h3>
        </div>
        <div className="flex p-2">
          <div className="pt-1.5 flex-1">imdb Рейтинг:</div>
          <h3 className='text-xl ml-5 font-semibold'>{imdbRating}</h3>
        </div>
        <div className="flex items-center mt-6">
          <button className='p-2 border-2'>Добавить в избранное</button>
        </div>
      </div>
    </article>
  )
}

export default MovieCardView