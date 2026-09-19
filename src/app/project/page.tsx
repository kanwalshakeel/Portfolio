import Project from '../components/Project'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "project",
  description:  "Explore my web development projects built using modern technologies and the MERN stack.",
};
export default function project(){
   return <Project/>
}