import { useForm } from "react-hook-form";
import SignupPresentational from "../components/signup/SignupPresentational";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <SignupPresentational
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      register={register}
    />
  );
};

export default Signup;
