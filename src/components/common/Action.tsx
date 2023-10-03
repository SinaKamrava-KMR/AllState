import { HiTrash, HiPencil } from "react-icons/hi";
type ActionPropsType = {
  onEdit:()=>void
  onDelete:()=>void
}
const Action = ({onEdit,onDelete}:ActionPropsType) => {

  return (
    <div className=" text-xl md:text-2xl flex gap-2 w-24">
      <button
        onClick={onDelete}
        className="bg-red-600 rounded-md text-white flex-1 py-1 flex justify-center px-2"
        
      >
        <HiTrash />
      </button>
      <button
        onClick={onEdit}
        className="bg-blue-600 rounded-md text-white flex-1 py-1 flex justify-center px-2"
      >
        <HiPencil />
      </button>
    </div>
  );
};

export default Action;
