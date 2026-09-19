import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created with Next.js",
};

interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
   <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
