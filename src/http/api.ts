import axios, { AxiosRequestConfig, isAxiosError } from "axios";
import { getSession } from "next-auth/react";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

const sendRequest = async (
  method: "GET" | "POST" | "PUT" | "DELETE",
  subURL: string,
  params?: Record<string, any>,
  data?: Record<string, any>
) => {
  const session = await getSession();
  const requestConfig: AxiosRequestConfig = {
    url: subURL,
    method: method,
    data: data,
    params:
      params !== undefined || method === "GET"
        ? { ...params, business_id: session?.user?.business_id }
        : undefined,
    headers: {
      Authorization: session ? `Bearer ${session?.user?.token}` : undefined,
    },
  };

  try {
    const response = await API.request(requestConfig);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error?.response?.data?.message;
    } else {
      throw "Something went wrong";
    }
  }
};

export const GET = async (subURL: string, params?: Record<string, any>) => {
  const response = await sendRequest("GET", subURL, params);
  return response.data;
};

export const POST = async (subURL: string, data: Record<string, any>) => {
  const response = await sendRequest("POST", subURL, undefined, data);
  return response;
};

export const PUT = async (subURL: string, data: Record<string, any>) => {
  const response = await sendRequest("PUT", subURL, undefined, data);
  return response;
};

export const DELETE = async (subURL: string) => {
  const response = await sendRequest("DELETE", subURL);
  return response;
};
