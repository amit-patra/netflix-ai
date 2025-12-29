import React from 'react'
import { useSelector } from 'react-redux';
import { language } from '../utils/languageConstatnt';

const GptSearchBar = () => {
  const lang = useSelector(store => store?.language?.lang)
  return (
    <div className='flex'>
      <input className='p-3 rounded-md w-full' type='text' placeholder={language[lang].searchText} />
      <button className='bg-red-600 opacity-100 p-3 rounded-md ml-1 w-1/3 text-white'> {language[lang].searchBtn}</button>
    </div>
  )
}

export default GptSearchBar