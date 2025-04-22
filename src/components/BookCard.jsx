
function BookCard({data:{image}}) {
    console.log(image);
    
  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

export default BookCard;