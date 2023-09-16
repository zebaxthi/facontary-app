"use client";
import { SessionProvider } from "next-auth/react";

export const SessionAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionAuthProvider;
