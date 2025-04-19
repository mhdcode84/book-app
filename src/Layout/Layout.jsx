import React from 'react'

function Layout({children}) {
  return (
    <>
    <header className='flex justify-between items-center bg-[#303030] p-[10px_20px] rounded-[10px] mb-[80px]'>
        <h1 className='text-2xl font-bold'>Book App</h1>
        <p><a className='text-[#6552f4] font-[600]' href="https://github.com/mhdcode84/book-app">Github</a> | React.Js Full Course</p>
    </header>
    {children}
    <footer><p className='text-center bg-[#303030] p-[20px] rounded-[10px] mt-[80px]'>Develop By Mohamad Sajadi ❤</p></footer>
    </>
  )
}

export default Layout