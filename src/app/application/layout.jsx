import "@/app/globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "facontary Home",
};

export default function ApplicationLayout({ children }) {
  return (
    <section className="h-screen flex flex-row justify-start">
      <Sidebar></Sidebar>
      <div className="flex-1 p-4">{children}</div>
    </section>
  );
}
