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
        <p className="text-gray-400">Software Developer</p>
        <Button
          onClick={() => {router.push("/about")}}
          label="About Me"
          icon={BsFillArrowRightCircleFill}
          black
        />
      </div>

      <div className="flex flex-col justify-center items-center md:w-1/2">
        <div className="md:w-[500px] w-full mb-4 md:ml-12">
          <Image
            src=""
            width={300}
            height={300}
            alt="Leila image"
            className="max-w-full rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center md:text-left"
        >
          Passionate Full Stack web developer with a Ph.D. in Mathematics,
          merging analytical thinking and creative problem-solving to craft
          captivating web solutions.
        </p>
      </div>
    </div>
  );
}
