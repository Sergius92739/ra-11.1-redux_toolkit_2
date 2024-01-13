import React from 'react'
import MoviePreview from '../components/MoviePreview';
// import { movie } from '../App'
import SearchFormView from '../components/SearchFormView';

type Props = {}

const SearchListPage = (props: Props) => {
  return (
    <>
      <SearchFormView type='byTitle' />
      <SearchFormView type='byID' />
      <div className='page'>
        {/* <MoviePreview {...movie} />
        <MoviePreview {...movie} />
        <MoviePreview {...movie} />
        <MoviePreview {...movie} />
        <MoviePreview {...movie} />
        <MoviePreview {...movie} />
        <MoviePreview {...movie} /> */}
      </div>
    </>
  )
}

export default SearchListPage