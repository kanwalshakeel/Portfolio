import GetInTouch from '../components/GetInTouch'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
  description: "Get in touch with Kanwal Shakeel for web development projects, collaboration and professional opportunities.",

};
export default function contact(){
  return  <GetInTouch/>
}