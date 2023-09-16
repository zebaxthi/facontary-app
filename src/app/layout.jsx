import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { SessionAuthProvider } from "@/context/SessionAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "facontary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SessionAuthProvider>
            <main>{children}</main>
          </SessionAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
