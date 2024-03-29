
import axios, { AxiosResponse } from "axios";

export async function signupApi(params: FormValues) {
  try {
    const response: AxiosResponse = await axios.post<FormValues>(
      "http://localhost:7000/users/",
      params
    );

    console.log(response);
    
    if (response.status !== 201)
      throw new Error("something went wrong while signup !!!");

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
export async function loginApi(params: Partial<FormValues>) {
  try {
    const response: AxiosResponse = await axios.post<Partial<FormValues>>(
      "http://localhost:7000/login",
      params
    );

    console.log(response);
    
    if (response.status !== 200)
      throw new Error("something went wrong while signup !!!");

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
