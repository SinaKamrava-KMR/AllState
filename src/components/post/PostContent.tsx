import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import Action from "../common/Action";
import WithModal from "../common/WithModal";
import { useState } from "react";
import ShowActions from "../common/ShowActions";
import DeletePost from "../common/DeletePost";
import { deletePost } from "../../services/api/post";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
type PropsType = {
  data: PostType;
};
const PostContent = ({ data }: PropsType) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDeletePost =  () => {
    deletePost(data.id).then(() => {
      toast.success("Post successfully Deleted");
      navigate("/");
    }).catch(() => {
      toast.error("Something went wrong !!!");
    })
  }

  
  return (
    <section className="flex-1 flex flex-col items-center py-5 gap-2 md:gap-5">
      {openEdit && (
        <WithModal>
          <p className="bg-slate-50">Editting</p>
        </WithModal>
      )}
      {openDelete && (
        <WithModal>
          <DeletePost onClick={handleDeletePost} onCancel={()=>setOpenDelete(false)}/>
        </WithModal>
      )}

      <h1 className="text-xl font-bold">{data.title}</h1>
      <div className="flex gap-1 items-center">
        <HiOutlineLocationMarker />
        <p>{data.address}</p>
      </div>

      <p className="text-sm  text-center">{data.description}</p>

      <div className="w-full bg-slate-400 dark:bg-slate-800 rounded-md p-2 md:p-5 flex justify-between">
        <p className="md:text-xl">{data.userName}</p>
        <div className="flex gap-1 items-center">
          <HiOutlinePhone />
          <p>{data.phone}</p>
        </div>
      </div>
      <p className="font-bold md:text-xl">${data.price}</p>

      <span className="flex-1"></span>
      <ShowActions userId={data.userId}>
        <Action
          onEdit={() => setOpenEdit(true)}
          onDelete={() => setOpenDelete(true)}
        />
      </ShowActions>
    </section>
  );
};

export default PostContent;
