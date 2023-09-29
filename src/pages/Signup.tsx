import { useForm } from "react-hook-form";
import SignupPresentational from "../components/signup/SignupPresentational";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../services/api/auth";

const Signup = () => {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();


  const onSubmit = (data: FormValues) => {
    signupApi(data)
      .then(() => navigate("/",{replace:true}))
      .catch(error=>console.log(error));
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
