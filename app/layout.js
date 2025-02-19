import localFont from "next/font/local";
import "./reset.css";
import "./globals.css";
import Header from "@/components/Header";
import Loading from "./loading";
import { Suspense } from "react";

const seoulNamsan = localFont({
  src: "./fonts/SEOULNAMSANB.ttf",
  display: "block",
  variable: "--font-seoul-namsan"
});
const parisienne = localFont({
  src: "./fonts/Parisienne.ttf",
  display: "block",
  variable: "--font-paris"
});

export const metadata = {
  title: "백년가약",
  description: "양태규와 최혜진의 백년가약",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${seoulNamsan.variable} ${parisienne.variable}  antialiased`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
