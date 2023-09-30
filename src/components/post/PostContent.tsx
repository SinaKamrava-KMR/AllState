import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import Action from "../common/Action";
const PostContent = () => {
  return (
    <section className="flex-1 flex flex-col items-center py-5 gap-2 md:gap-5">
      <h1 className="text-xl font-bold">Sale Home for Free</h1>
      <div className="flex gap-1 items-center">
        <HiOutlineLocationMarker />
        <p>you house location in street</p>
      </div>

      <p className="text-sm  text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        nobis sequi adipisci nam repellendus earum quasi atque, modi temporibus
        alias iste. Soluta incidunt, maiores quam fuga eaque enim excepturi
        fugit!
      </p>

      <div className="w-full bg-slate-400 dark:bg-slate-800 rounded-md p-2 md:p-5 flex justify-between">
        <p className="md:text-xl">Sina kamrava</p>
        <div className="flex gap-1 items-center">
          <HiOutlinePhone />
          <p>09216343118</p>
        </div>
      </div>
      <p className="font-bold md:text-xl">$300.34</p>

      <span className="flex-1"></span>
      <Action />
    </section>
  );
};

export default PostContent;
