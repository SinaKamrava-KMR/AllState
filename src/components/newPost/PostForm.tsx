import { useForm } from "react-hook-form";
import PostFormPresentaion from "./PostFormPresentaion";

type PostType = {
  onSubmit:(data:PostFormValues)=>void
}


const PostForm = ({onSubmit}:PostType) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PostFormValues>();
 
  return (
    <PostFormPresentaion
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      register={register}
    />
  );
};

export default PostForm;
