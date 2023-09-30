import { HiTrash, HiPencil } from "react-icons/hi";

const Action = () => {
  const handleDelete = () => {};
  const handleEdit = () => {};
  return (
    <div className=" text-xl md:text-2xl flex gap-2 w-24">
      <button
        onClick={handleDelete}
        className="bg-red-600 rounded-md text-white flex-1 py-1 flex justify-center px-2"
      >
        <HiTrash />
      </button>
      <button
        onClick={handleEdit}
        className="bg-blue-600 rounded-md text-white flex-1 py-1 flex justify-center px-2"
      >
        <HiPencil />
      </button>
    </div>
  );
};

export default Action;
