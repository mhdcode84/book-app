import React from 'react'
import { BiVector } from 'react-icons/bi';
import { MdSearch } from "react-icons/md";

function SearchBox({search,setsearch,searchhandler}) {
  return (
    <div className=' w-fit mb-[50px] flex gap-3'>
        <input className='border w-[300px] h-[40px] rounded-[5px] pl-[10px] pb-1 outline-none border-none bg-[#e0e0e0] text-[#090909] text-[1rem] flex items-center' placeholder='search title' type="text" value={search} onChange={e=>setsearch(e.target.value.toLocaleLowerCase().trim())} />
        <button className='bg-[#6552f4] w-[40px] h-[40px] flex justify-center items-center cursor-pointer rounded-[5px]' onClick={searchhandler}>
            <MdSearch className='text-2xl'  />
        </button>
    </div>
  )
}
export default SearchBox