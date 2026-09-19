import Skill from '../components/Skill'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "skills",
  description:"Explore the technical skills and technologies I use, including MongoDB, Express.js, React.js, Node.js, Next.js, JavaScript and more.",
};

export default function contact(){
   return <Skill/>
}