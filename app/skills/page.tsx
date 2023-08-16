"use client"

import React from "react";
import { useRouter } from "next/navigation";
import SkillsCard from "./SkillsCard";

const card = [
  {
    image: "/html.png",
    ImgTitle: "html logo",
    name: "HTML",
    description: "",
    onClick: "https://www.w3schools.com/html/default.asp",

  },
  {
    image: "/css.jpg",
    ImgTitle: "css logo",
    name: "CSS",
    description: "",
    onClick: "",
  },
  {
    image: "/js.png",
    ImgTitle: "javascript logo",
    name: "JavaScript",
    description: "",
    onClick: "",
  },
  {
    image: "/ts.jpg",
    ImgTitle: "typescript logo",
    name: "TypeScript",
    description: "",
    onClick: "",
  },
  {
    image: "/react.png",
    ImgTitle: "react logo",
    name: "React",
    description: "",
    onClick: "",
  },
  {
    image: "/next2.jpg",
    ImgTitle: "next.js logo",
    name: "Next.js",
    description: "",
    onClick: "",
  },
  {
    image: "/node.png",
    ImgTitle: "node.js logo",
    name: "Node.js",
    description: "",
    onClick: "",
  },
  {
    image: "/sql.jpg",
    ImgTitle: "sql logo",
    name: "SQL",
    description: "",
    onClick: "",
  },
  {
    image: "/mysql.png",
    ImgTitle: "MySql logo",
    name: "MySQL",
    description: "",
    onClick: "",
  },
  {
    image: "/psql.jpg",
    ImgTitle: "psql logo",
    name: "PostgreSQL",
    description: "",
    onClick: "",
  },
  {
    image: "/mongodb.jpg",
    ImgTitle: "mongodb logo",
    name: "MongoDB",
    description: "",
    onClick: "",
  },
  {
    image: "/prisma.png",
    ImgTitle: "prisma logo",
    name: "Prisma",
    description: "",
    onClick: "",
  },

  {
    image: "/git.png",
    ImgTitle: "git logo",
    name: "Git",
    description: "",
    onClick: "",
  },
  {
    image: "aws.png",
    ImgTitle: "aws logo",
    name: "AWS",
    description: "",
    onClick: "",
  },
];

export default function SkillsPage() {
  const router = useRouter();

  const handleSkillClick = (link: string | undefined) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div>
      <div className="flex gap-3 justify-center py-12 flex-wrap cursor-pointer">
        {card.map((item) => (
          <SkillsCard
            key={item.name}
            image={item.image}
            ImgTitle={item.ImgTitle}
            name={item.name}
            description={item.description}
            onClick={() => handleSkillClick(item.onClick)}
          />
        ))}
      </div>
    </div>
  );
}
