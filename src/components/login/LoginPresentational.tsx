import Input from "../common/Input";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
import { HiOutlineMail ,HiLockClosed } from "react-icons/hi";
import Button from "../common/Button";
import { Form, Link } from "react-router-dom";



type PropsType = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  onSubmit: () => void;
};


const LoginPresentational = ({ register, errors, onSubmit }: PropsType) => {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center relative p-5">
      <div className="rounded-lg w-full md:w-1/2 lg:w-1/3  text-center shadow-lg dark:bg-slate-800 transition-all duration-300  p-5">
        <h1 className="text-xl mb-5">User Login</h1>
        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          
          <Input
            tabindex={1}
            error={errors.email ? (errors.email.message as string) : ""}
            placeholder="@example.com"
            icon={<HiOutlineMail />}
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "You're email has not a current format",
              },
            })}
          />

          <div className="flex flex-wrap gap-3">
            <Input
              type="password"
              tabindex={4}
              className="flex-1"
              error={errors.password ? (errors.password.message as string) : ""}
              placeholder="Password"
              icon={<HiLockClosed />}
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: "password is not strong",
                },
              })}
            />
            <Button className="w-full md:w-fit">Submit</Button>
          </div>
          <Link to="/signup" className="text-blue-400 text-sm">
            create account
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default LoginPresentational;