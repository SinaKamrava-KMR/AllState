import Map from "../components/common/Map";
import PostContent from "../components/post/PostContent";

const Post = () => {
  return (
    <section className="flex flex-wrap flex-col md:flex-row w-full p-2 gap-2 md:gap-6 md:w-11/12 h-full mx-auto ">
      <PostContent />
      <Map position={[40,1]} dragable={false} />
    </section>
  );
};

export default Post;
