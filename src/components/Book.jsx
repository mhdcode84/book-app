import React, { useState } from 'react'
import { books as bookData } from '../constants/mockData'
import BookCard from './BookCard'
import SideCard from './SideCard'
import SearchBox from './SearchBox'
function Book() {
  const [liked, setliked] = useState([])
  const [books,setbooks] = useState(bookData)
  const [search, setsearch] = useState([])
  function handlelikedlist(book, status) {
    if (status) {
      const newlikelist = liked.filter(i => i.id !== book.id)
      setliked(newlikelist)
    } else {
      setliked((liked) => [...liked, book])


    }
  }
  function searchhandler(){
if(search){
const newbooks = bookData.filter((book)=>book.title.toLocaleLowerCase().includes(search))
setbooks(newbooks)
}else{
  setbooks(bookData)
}
  }
  return (
    <>
      <SearchBox search={search} setsearch={setsearch} searchhandler={searchhandler} />
      <div className={liked.length ? "flex" : ""}>
        <div className='flex-1'>{books.map(book => (
          <BookCard data={book} handlelikedlist={handlelikedlist} key={book.id} />

        ))}</div>
        {!!liked.length && <div className='bg-[#6552f5] p-[15px] rounded-[10px] ml-[20px] h-fit'>
          <h4 className='text-[20px] font-medium'>Favorite</h4>
          {liked.map(book => <SideCard data={book} key={book.id} />)}</div>}
      </div>
    </>
  )
}

export default Book