import { useState, useEffect } from "react";
import { createPost } from "../../services/api/post";
import toast from "react-hot-toast";

export default function useCreatePost(
  onSuccess: (res: PostParamsType) => void
) {
  const [params, setParams] = useState<PostParamsType | undefined>();

  const handleRequest = async (data: PostParamsType) => {
    try {
      const res = await createPost(data);
      onSuccess(res);
      setParams(undefined);
    } catch (e) {
      toast.error("something went wrong !!!");
    }
  };

  useEffect(() => {
    if (params) {
      handleRequest(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return setParams;
}
