import { Link } from "react-router-dom"
import { HiOutlinePaperAirplane } from "react-icons/hi";
const Card = () => {
  return (
    <Link to={`/post/3`}>
    
    <section className="shadow-lg bg-slate-100 dark:bg-slate-800  rounded-md flex justify-center items-center flex-col p-4 relative">

      <div className="w-16 h-16">
        <img src="/public/images/h.png" className="object-cover"/>
      </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
        <p className="text-md font-bold">
         $300.32
      </p>
      
        <span className="absolute top-2 right-3 text-xl  rotate-45 text-slate-400 "><HiOutlinePaperAirplane/></span>


    </section>
    </Link>
  )
}

export default Card