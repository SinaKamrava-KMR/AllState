import { useForm } from "react-hook-form";
import PostFormPresentaion from "./PostFormPresentaion";

type PostType = {
  onSubmit: (data: PostFormValues) => void;
  init?:PostFormValues
}


const PostForm = ({onSubmit,init}:PostType) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PostFormValues>({defaultValues:init});
 
  return (
    <PostFormPresentaion
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      register={register}
    />
  );
};

export default PostForm;
