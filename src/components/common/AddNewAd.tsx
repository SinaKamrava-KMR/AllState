import { Link } from "react-router-dom"
import { HiPlus } from "react-icons/hi";


const AddNewAd = () => {
  return (
    <Link to="/newpost">
      <div className="flex gap-2 items-center border border-dashed rounded border-slate-800 dark:border-slate-500 py-1 px-2">
        <HiPlus />
        <p className="hidden md:block">Add New Post</p>
     </div>
    </Link>
  )
}

export default AddNewAd