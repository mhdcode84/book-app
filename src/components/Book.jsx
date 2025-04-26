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
    <div>
    <div>{books.map(book=>(
      <BookCard data={book} handlelikedlist={handlelikedlist} key={book.id} />

    ))}</div>
    <h4 className=''>Favorite</h4>
    {!!liked.length && <div>{liked.map(book=><SideCard data={book} key={book.id} />)}</div>}
    </div>
  )
}

export default Book