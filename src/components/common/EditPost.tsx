import PostForm from "../newPost/PostForm";
import Map from "./Map";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { LatLngExpression } from "leaflet";

type PropsType = {
  onClick: (data:Partial<PostParamsType>) => void;
  onCancel: () => void;
  post: PostType;
};

const EditPost = ({ onClick, onCancel, post }: PropsType) => {
  const [latlng, setLatLng] = useState<LatLngExpression>(
    post.latlng
  );
  const handleOnSubmit = (data: PostFormValues) => {
   
    const params: Partial<PostParamsType> = {
      ...data,
      latlng,
    };

    onClick(params)
  };

  const handleChangePositin = (latlng: LatLngExpression) => {
    setLatLng(latlng);
  };

  return (
    <div className="bg-white dark:bg-slate-900 shadow-lg dark:text-white w-full md:w-9/12 rounded flex flex-col-reverse md:flex-row relative p-3 h-full md:h-auto">
      <div className="flex-1 z-30">
      <Map position={latlng} onChageLatLng={handleChangePositin} />
     </div>
      <PostForm init={post} onSubmit={handleOnSubmit} />
      <span
        onClick={onCancel}
        className="absolute cursor-pointer z-40 right-2 top-2 text-xl text-red-500 bg-slate-100 dark:bg-slate-800 rounded-full p-2"
      >
        <HiOutlineX />
      </span>
    </div>
  );
};

export default EditPost;
