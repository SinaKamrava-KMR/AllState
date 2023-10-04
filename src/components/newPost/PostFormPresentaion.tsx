import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../common/Input";
import { HiSparkles ,HiLocationMarker,HiPhone,HiCurrencyDollar} from "react-icons/hi";
import Button from "../common/Button";
import { Form } from "react-router-dom";
import TextArea from "../common/TextArea";

type PropsType = {
  register: UseFormRegister<PostFormValues>;
  errors: FieldErrors<FieldValues>;
  onSubmit: () => void;
};

const PostFormPresentaion = ({ register, errors, onSubmit }: PropsType) => {
  return (
    <div className="flex-1 md:flex-grow-0 md:min-w-[450px] overflow-y-auto items-center py-3 px-5 flex flex-col gap-5 ">
      <h1 className="text-xl font-bold">Post Infortmation</h1>
      <Form onSubmit={onSubmit} className="w-full flex-1 gap-6 flex flex-col ">

      <Input
        placeholder="Title"
        icon={<HiSparkles />}
        error={errors.title ? (errors.title.message as string) : ""}
        {...register("title", {
          required: {
            value: true,
            message: "title is required",
          },
          min: {
            value: 3,
            message: "The title is too short",
          },
        })}
      />

        
      <Input
        placeholder="address"
        icon={<HiLocationMarker />}
        error={errors.address ? (errors.address.message as string) : ""}
        {...register("address", {
          required: {
            value: true,
            message: "address is required",
          },
          min: {
            value: 3,
            message: "The address is too short",
          },
        })}
      />
      <Input
        placeholder="Phone Number"
        icon={<HiPhone />}
        error={errors.phone ? (errors.phone.message as string) : ""}
        {...register("phone", {
          required: {
            value: true,
            message: "phone is required",
          },
          min: {
            value: 11,
            message: "The phone number is too short",
          },
          pattern: {
            value:/^-?\d+(\.\d+)?$/,
            message: "The phone number is incurrect",
          }
        })}
        />
        
        <TextArea
          placeholder="Description"
          error={errors.description ? (errors.description.message as string) : ""}
          {...register("description", {
            required: {
              value: true,
              message: "description is required",
            }
          })}
        />

      <Input
        placeholder="Price"
        icon={<HiCurrencyDollar />}
        error={errors.price ? (errors.price.message as string) : ""}
        {...register("price", {
          required: {
            value: true,
            message: "price is required",
          },
          pattern: {
            value:/^-?\d+(\.\d+)?$/,
            message: "The price is incurrect",
          }
        })}
      />
      

      <span className="flex-1"></span>
        <Button className="w-full">Submit</Button>
        </Form>
    </div>
  );
};

export default PostFormPresentaion;
