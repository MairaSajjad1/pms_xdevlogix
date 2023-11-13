"use client"
import { FC, useEffect, useState } from "react";
import * as z from "zod";
import Image from "next/image";
// import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/components/modal";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { BiLoaderAlt as Loader } from "react-icons/bi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const Login: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [openpassword, setOpenPassword] = useState(false);

  const togglePasswordModal = () => {
    setOpenPassword((openpassword) => !openpassword);
  };

  const handleForgotPasswordClick = () => {
    togglePasswordModal();
  };

  const handleLinkClick = () => {
    handleForgotPasswordClick();
  };

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: any) => {
    // router.push("/dashboard")
    setIsLoading(true);
    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if(response?.status === 401){
      alert("Wrong Credenttial")
    }else if(response?.status === 200){
      router.replace("/dashboard");
    }
    // if (response?.error) {
    //   toast.error("Invalid Credentials");
    // } else {
    //   router.replace("/dashboard");
    // }
    setIsLoading(false);
  };
  
  return (
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={80}
              height={80}
              priority
            />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Login to PMS Devlogix
          </h2>
        </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="abc@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="w-full flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                  </div>
                  <FormControl>
                    <Input
                      placeholder="........... "
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} className="w-full" type="submit">
              {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
