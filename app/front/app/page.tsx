import Blog from "@/components/Pokemon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PokeAPI app",
  description: "PokeAPI app frontend",
  // other metadata
};

export default function Home() {
  return (
    <>     
      <Blog />      
    </>
  );
}
