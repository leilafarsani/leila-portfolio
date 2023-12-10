"use client";
import Button from "@/components/buttons/Button";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variant: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(244, 244, 244)",
      mixBlendMode: "difference",
    },
    textwhite: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const router = useRouter();

  return (
    <div className="flex md:flex-row flex-col h-screen">
      <div className="flex flex-col justify-center items-center md:w-1/2 space-y-6">
        <motion.div
          className="cursor"
          variants={variant}
          animate={cursorVariant}
        />
        <motion.h1
          variants={textVariant(1.1)}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="md:text-[6.1rem] text-[3rem] uppercase leading-[1.2] font-bold"
        >
          <span className="text-gray-300">Leila</span>
          <br />
          FARSANI
        </motion.h1>
        <p className="text-gray-400">A Lifelong Learner </p>
        <Button
          onClick={() => {
            router.push("/about");
          }}
          label="About Me"
          icon={BsFillArrowRightCircleFill}
          black
        />
      </div>

      <div className="flex flex-col justify-center items-center md:w-1/2">
        <div className="md:w-[500px] w-full mb-6 md:ml-12">
          <Image
            src="/leila.jpg"
            width={400}
            height={400}
            alt="Leila image"
            className="max-w-full rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center md:text-left mr-5"
        >
          An Enthusiastic Data Scientist and skilled Full Stack Web Developer,
          backed by a Ph.D. in Mathematics. Fueled by an unwavering dedication
          to education and teaching, I seamlessly blend expertise in data
          science and web development to drive innovation. Passionate about
          leveraging my diverse skill set to both create technological solutions
          and inspire others through education.
        </p>
      </div>
    </div>
  );
}