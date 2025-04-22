import React from 'react'
import { books } from '../constants/mockData'
import BookCard from './BookCard'
function Book() {
  return (
    <div>{books.map(book=>(
      <BookCard data={book} />
    ))}</div>
  )
}

export default Book