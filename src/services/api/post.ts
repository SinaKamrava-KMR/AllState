import { AxiosResponse } from "axios";
import privateAxios from "../instance/privateAxios";

export async function createPost(params: PostParamsType):Promise<PostParamsType> {
  try {
    const res: AxiosResponse = await privateAxios.post("posts", params);
  

    
    if (res.status !== 201)
      throw new Error("Something went wrong. Can't create new post");

    return res.data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
}
