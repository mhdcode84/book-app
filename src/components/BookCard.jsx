import { useState } from "react";
import { CiHeart } from "react-icons/ci";
function BookCard({ data: { image, title, author, language, pages } }) {
    const [like, setlike] = useState()
    function clickhandler() {
        setlike(like => !like)
    }

    return (
        <div className="flex justify-between rounded-[10px] p-[10px] mb-[12px] bg-[#303030] h-[120px]">
            <div className="flex gap-8">
                <img src={image} alt={title} />
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-medium">{title}</h3>
                    <p className="text-[18px]">{author}</p>
                 <div className="flex gap-5">
                 <span className="text-[#959595]">{language}</span>
                 <span className="text-[#959595]">{pages}pages</span>
                 </div>
                </div>
            </div>

            <button className=" transition-all duration-100  flex items-start hover:scale-[1.2] h-fit" onClick={clickhandler}>
                <CiHeart color={like ? "red" : "#eaeaea"} fontSize="1.8rem" />
            </button>
        </div>
    )
}

export default BookCard;