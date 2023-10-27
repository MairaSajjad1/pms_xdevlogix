"use client";
import { ReactNode } from "react";
import { ToastProvider } from "./toast-provider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <ToastProvider />
      {children}
    </SessionProvider>
  );
};

export default Providers;
