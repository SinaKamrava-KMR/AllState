import { LatLngExpression } from "leaflet";
import Map from "../components/common/Map";
import PostForm from "../components/newPost/PostForm";

const NewPost = () => {
  const handleOnSubmit = (data: PostFormValues) => {
    console.log(data);
  };

  const handleChangePosition = (latlng:LatLngExpression) => {
    console.log(latlng);
  };

  return (
    <div className="flex h-full p-2 flex-col-reverse md:flex-row">
      <Map
        position={[40, 0]}
        dragable={true}
        onChageLatLng={handleChangePosition}
      />
      <PostForm onSubmit={handleOnSubmit} />
    </div>
  );
};

export default NewPost;
