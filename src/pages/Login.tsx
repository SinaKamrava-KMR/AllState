import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../services/api/auth";
import { ACCESS_TOKEN } from "../configs/constance";
import useDataContext from "../hooks/context/useDataContext";
import LoginPresentational from "../components/login/LoginPresentational";


const Login = () => {
  const navigate = useNavigate();
  const {setUser} =useDataContext();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = async (data: Partial<FormValues>) => {
    try {
      const res = await loginApi(data);
      localStorage.setItem(ACCESS_TOKEN, res.accessToken);
      setUser?.(res.user);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginPresentational
    onSubmit={handleSubmit(onSubmit)}
    errors={errors}
    register={register}
  />
  )
}

export default Login