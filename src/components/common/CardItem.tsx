import { Link } from "react-router-dom"
import { HiOutlinePaperAirplane } from "react-icons/hi";
type CardType = {
  post:PostType
}

const Card = ({ post }:CardType) => {
  return (
    <Link to={`/post/${post.id}`}>
    
    <section className="shadow-lg bg-slate-100 dark:bg-slate-800  rounded-md flex justify-center items-center flex-col p-4 relative">

      <div className="w-16 h-16">
        <img src="/public/images/h.png" className="object-cover"/>
      </div>
        <p className="text-sm">
          {post.address}
      </p>
        <p className="text-md font-bold">
         ${post.price}
      </p>
      
        <span className="absolute top-2 right-3 text-xl  rotate-45 text-slate-400 "><HiOutlinePaperAirplane/></span>


    </section>
    </Link>
  )
}

export default Card