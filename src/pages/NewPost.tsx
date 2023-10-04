import { LatLngExpression } from "leaflet";
import Map from "../components/common/Map";
import PostForm from "../components/newPost/PostForm";
import { useState } from "react";
import useDataContext from "../hooks/context/useDataContext";
import useCreatePost from "../hooks/post/useCreatePost";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const [latlng, setLatLng] = useState<LatLngExpression | undefined>();
  const { user } = useDataContext();
  const setParams = useCreatePost(handleOnSuccess);

  const handleOnSubmit = (data: PostFormValues) => {
    if (!latlng) {
      console.log(latlng);

      toast.error("please set lat lng");

      return;
    }

    const params: PostParamsType = {
      ...data,
      latlng,
      userId: user.id,
      userName:`${user.name} ${user.lastName}`
    };

    setParams(params);
  };

  const handleChangePosition = (latlng: LatLngExpression) => {
    setLatLng(latlng);
  };

  function handleOnSuccess() {
    toast.success("post successfuly created");
    navigate("/?page=1");
  }

  return (
    <div className="flex h-full p-2 flex-col-reverse md:flex-row">
      <Map dragable={true} onChageLatLng={handleChangePosition} />
      <PostForm onSubmit={handleOnSubmit} />
    </div>
  );
};

export default NewPost;
