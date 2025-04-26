import React, { useState } from 'react'
import { books } from '../constants/mockData'
import BookCard from './BookCard'
import SideCard from './SideCard'
function Book() {
  const [liked,setliked] = useState([])
  function handlelikedlist(book,status){
if (status) {
  const newlikelist = liked.filter(i=>i.id!==book.id)
  setliked(newlikelist)
}else{
setliked((liked)=>[...liked,book])


}



  }
  return (
    <div className={liked.length ? "flex": ""}>
    <div className='flex-1'>{books.map(book=>(
      <BookCard data={book} handlelikedlist={handlelikedlist} key={book.id} />

    ))}</div>
    {!!liked.length && <div className='bg-[#6552f5] p-[15px] rounded-[10px] ml-[20px] h-fit'> 
      <h4 className='text-[20px] font-medium'>Favorite</h4>
    {liked.map(book=><SideCard data={book} key={book.id} />)}</div>}
    </div>
  )
}

export default Book