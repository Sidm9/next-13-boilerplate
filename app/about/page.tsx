"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h1>about page</h1>
      <button onClick={() => router.back()}>Go Back</button>
    </>
  );
};

export default About;
