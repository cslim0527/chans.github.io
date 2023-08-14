"use client";

import StyledComponentsRegistry from "./registry";
import Header from "@/components/Header";
import "@/styles/fonts.css";
import "@/styles/global.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isShowHeader = !(pathname.indexOf("info") > -1);
  console.log(pathname);
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          {/* {isShowHeader && <Header />} */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
