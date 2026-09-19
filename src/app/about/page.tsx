import About from "../components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ",
  description:  "a MERN Stack Developer passionate about building modern and responsive web applications.",
};

export default function AboutPage() {
  return <About />;
}