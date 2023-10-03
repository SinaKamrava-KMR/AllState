import { useParams } from "react-router-dom";
import Map from "../components/common/Map";
import PostContent from "../components/post/PostContent";
import usePostById from "../hooks/post/usePostById";

const Post = () => {
   const { id } = useParams();
  const { post } = usePostById(id as string);

  if(!post) return <p>Loading...</p>
  return (
    <section className="flex flex-wrap flex-col md:flex-row w-full p-2 gap-2 md:gap-6 md:w-11/12 h-full mx-auto ">
      <PostContent data={post} />
      <Map position={post?.latlng} dragable={false} />
    </section>
  );
};

export default Post;
