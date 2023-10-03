import  { AxiosResponse } from "axios";
import privateAxios from "../instance/privateAxios";
import publicAxios from "../instance/publicAxios";

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


export async function getPosts(params:Partial<QueryParamsType>) {
  try {

  
    const res: AxiosResponse = await publicAxios.get("posts", {
      params
    });

    if (res.status !== 200)
      throw new Error("Something went wrong. Can't get  posts");

    
    return res;
  } catch (e) {
    throw new Error((e as Error).message);
  }
}


export async function getpostById(id:number|string) {
  try {

  
    const res: AxiosResponse = await publicAxios.get(`posts/${id}`);


    if (res.status !== 200)
      throw new Error("Something went wrong. Can't get  posts");

    return res.data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
}



export async function deletePost(id:number|string) {
  try {

  
    const res: AxiosResponse = await publicAxios.delete(`posts/${id}`);


    if (res.status !== 200)
      throw new Error("Something went wrong. Can't get  posts");

    return res.data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
}
