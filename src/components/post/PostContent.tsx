import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import Action from "../common/Action";
type PropsType = {
  data:PostType
}
const PostContent = ({ data }:PropsType) => {
  return (
    <section className="flex-1 flex flex-col items-center py-5 gap-2 md:gap-5">
      <h1 className="text-xl font-bold">{ data.title}</h1>
      <div className="flex gap-1 items-center">
        <HiOutlineLocationMarker />
        <p>{data.address }</p>
      </div>

      <p className="text-sm  text-center">
       {data.description}
      </p>

      <div className="w-full bg-slate-400 dark:bg-slate-800 rounded-md p-2 md:p-5 flex justify-between">
        <p className="md:text-xl">{ data.userName}</p>
        <div className="flex gap-1 items-center">
          <HiOutlinePhone />
          <p>{ data.phone }</p>
        </div>
      </div>
      <p className="font-bold md:text-xl">${data.price}</p>

      <span className="flex-1"></span>
      <Action />
    </section>
  );
};

export default PostContent;
