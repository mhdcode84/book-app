import React from 'react'

function SideCard({data:{image,title}}) {
  
  return (
    <div>
        <img src={image} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default SideCard