"use client"
import React, { useState } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../buttons/Button";
import DropMenu from "./DropMenu";
import { GrFormClose } from "react-icons/gr";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";



export default function Navbar() {
  const [drop, setDrop] = useState(false);
  const router = useRouter();

  return (
    <header
      className="sticky top-0 z-30 w-full border-b"
    >
      <div className="flex items-center justify-between px-6 py-6 cursor-default">
        <Link className="uppercase text-[1.5rem] z-50 ml-4" href="/">
          Leila <span className="text-gray-400">Portfolio</span>
        </Link>

        <div className="flex items-center gap-4 text-gray-800">
          <Button
            icon={BsFillArrowRightCircleFill}
            label="Contact"
            onClick={() => router.push("/contact")}
          />
          <ThemeToggle />
          <div className="rounded-full bg-gray-300 p-2 z-[999999]">
            {drop ? (
              <GrFormClose
                className="text-[1.5rem] cursor-pointer"
                onClick={() => setDrop(!drop)}
              />
            ) : (
              <RxHamburgerMenu
                className="text-[1.5rem] cursor-pointer"
                onClick={() => setDrop(!drop)}
              />
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {drop && <DropMenu drop={drop} setDrop={setDrop} />}
      </AnimatePresence>
    </header>
  );
}
