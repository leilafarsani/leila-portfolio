"use client"

import React from "react";
import { useRouter } from "next/navigation";
import SkillsCard from "./SkillsCard";

const card = [
  {
    image: "",
    ImgTitle: "",
    name: "S1 ",
    description:
      "",
    onClick: "",
  },
  {
    image: "/node.png",
    ImgTitle: "no title",
    name: "S2",
    description:
      "",
    onClick: "",
  },
]

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
