import React from 'react'

function SideCard({data:{image,title}}) {
  
  return (
    <div className='flex items-center p-[5px_10px] m-[10px_0px] bg-[#7c6ee9] gap-4  w-[250px] rounded-[5px]'>
        <img width="30px"  src={image} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default SideCard