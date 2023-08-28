import React, { useState } from 'react';

export default function Header() {

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    const change = document.documentElement;
    if (darkMode) {
      change.classList.remove('dark');
    } else {
      change.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className=' bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[900px] md:mb-[450px] lg:mb-[200px] 2xl:px-[250px]'>
      <h1 className=' text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1'> Social Media Dashboard </h1>
      <p className=' text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6'> Total Followers: 23,004 </p>
      <hr className='bg-black mb-[19px] md:hidden md:invisible' />
      <div className=' flex justify-between md:justify-end md:relative md:mt-[-75px] md:gap-3'>
        <p className=' text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'> Dark Mode </p>
        <label htmlFor="darkmode" className='relative border bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2px]'> 
          <input onClick={handleClick} id='darkmode' type="checkbox" className=' sr-only peer' />
          <div className=' peer-checked:bg-Toggle-gradient w-full h-full rounded-full absolute top-0 left-0'></div>
          <div className=' w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all'> </div>
        </label>
      </div>
    </header>
  )
}
