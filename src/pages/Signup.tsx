import { useForm } from "react-hook-form";
import SignupPresentational from "../components/signup/SignupPresentational";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../services/api/auth";
import { ACCESS_TOKEN } from "../configs/constance";
import useDataContext from "../hooks/context/useDataContext";

const Signup = () => {
  const navigate = useNavigate();
  const {setUser} =useDataContext();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await signupApi(data);
      localStorage.setItem(ACCESS_TOKEN, res.accessToken);
      setUser?.(res.user);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
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
