import React, { FormEventHandler } from 'react'

type TSearchFormView = {
  // handleChange: FormEventHandler,
  // handleSubmit: FormEventHandler,
  type: "byTitle" | "byID"
}

const SearchFormView = ({ type }: TSearchFormView) => {
  return (
    <form action="" className='w-[90%] max-w-[1000px] mx-auto my-[3rem] text-white'>
      <div className="">
        <label className='text-xl ' htmlFor={type}>Поиск по {type === "byTitle" ? "названию" : "идентификатору"}</label>
      </div>
      <div className="flex mt-4 opacity-60">
        <input
          placeholder={`Введите ${type === "byTitle" ? "название" : "идентификатор"} фильма`}
          id={type} type="text"
          className='text-xl border-2 p-2 rounded-md w-full text-black focus:opacity-100'
        />
        <button className='p-3.5 ml-3 border-2 rounded-md'>Поиск</button>
      </div>
    </form>
  )
}

export default SearchFormView