import { HiExclamation } from "react-icons/hi";

type PropsType = {
  onClick: () => void;
  onCancel: () => void;
};

const DeletePost = ({ onClick, onCancel }: PropsType) => {
  return (
    <div className="dark:bg-slate-800 dark:text-white text-slate-700 bg-slate-50 shadow-lg p-5 rounded-md flex flex-col gap-5">
      <div className="flex items-center gap-1 text-lg">
      <HiExclamation />
        <p>Are you sure for deleted this post?</p>
      </div>
      <div className="flex gap-3 items-center">
        <button
          className="bg-red-500 hover:bg-red-600 p-1 px-2 rounded-sm text-white"
          onClick={onClick}
        >
          Remove
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeletePost;
