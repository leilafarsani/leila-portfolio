"use client"

import React from "react";
import { useRouter } from "next/navigation";
import SkillsCard from "./SkillsCard";

const card = [
  {
    image: "/html.png",
    ImgTitle: "",
    name: "S1 ",
    description: "",
    onClick: "",
  },
  {
    image: "/css.jpg",
    ImgTitle: "no title",
    name: "S2",
    description: "",
    onClick: "",
  },
  {
    image: "/js.png",
    ImgTitle: "",
    name: "S3 ",
    description: "",
    onClick: "",
  },
  {
    image: "/ts.jpg",
    ImgTitle: "",
    name: "S4 ",
    description: "",
    onClick: "",
  },
  {
    image: "/react.png",
    ImgTitle: "",
    name: "S5",
    description: "",
    onClick: "",
  },
  {
    image: "/next2.jpg",
    ImgTitle: "",
    name: "S1 ",
    description: "",
    onClick: "",
  },
  {
    image: "/node.png",
    ImgTitle: "",
    name: "S6 ",
    description: "",
    onClick: "",
  },
  {
    image: "/sql.jpg",
    ImgTitle: "",
    name: "S7",
    description: "",
    onClick: "",
  },
  {
    image: "/mysql.png",
    ImgTitle: "",
    name: "S8",
    description: "",
    onClick: "",
  },
  {
    image: "/psql.jpg",
    ImgTitle: "",
    name: "S9",
    description: "",
    onClick: "",
  },
  {
    image: "/mongodb.jpg",
    ImgTitle: "",
    name: "S7",
    description: "",
    onClick: "",
  },
  {
    image: "/prisma.png",
    ImgTitle: "",
    name: "S7",
    description: "",
    onClick: "",
  },

  {
    image: "/git.png",
    ImgTitle: "",
    name: "S7",
    description: "",
    onClick: "",
  },
  {
    image: "aws.png",
    ImgTitle: "",
    name: "S7",
    description: "",
    onClick: "",
  }
];

export default function SkillsPage() {
  const router = useRouter();

  return (
    <div>
      <div className="flex gap-3 justify-center py-12 flex-wrap cursor-default">
        {card.map((item) => (
          <SkillsCard
            image={item.image}
            ImgTitle={item.ImgTitle}
            name={item.name}
            description={item.description}
            onClick={() => router.push(item.onClick)}
          />
        ))}
      </div>
    </div>
  );
}
