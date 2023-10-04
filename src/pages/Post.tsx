import { useParams } from "react-router-dom";
import Map from "../components/common/Map";
import PostContent from "../components/post/PostContent";
import usePostById from "../hooks/post/usePostById";
// import { useEffect,useState } from "react";

const Post = () => {
  const { id } = useParams();
  const { post ,setReset} = usePostById(id as string);
 



  if(!post) return <p>Loading...</p>
  return (
    <section className="flex flex-wrap flex-col md:flex-row w-full p-2 gap-2 md:gap-6 md:w-11/12 h-full mx-auto relative">
      <PostContent reset={()=>setReset(s=>!s)} data={post as PostType} />
      <Map position={post?.latlng} dragable={false} />
    </section>
  );
};

export default Post;
