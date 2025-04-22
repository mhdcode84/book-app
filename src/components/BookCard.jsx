import { CiHeart } from "react-icons/ci";
function BookCard({data:{image,title,author,language,pages}}) {
    console.log(image);
    
  return (
    <div className="flex justify-between">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div>
        <span>{language}</span>
        <span>{pages}pages</span>
      </div>
      <button >
    <CiHeart color="#e0e0e0" fontSize="1.8rem"/>
      </button>
    </div>
  )
}

export default BookCard;