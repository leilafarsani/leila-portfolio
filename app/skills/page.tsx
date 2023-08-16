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
    onClick: "https://www.w3schools.com/css/default.asp",
  },
  {
    image: "/js.png",
    ImgTitle: "javascript logo",
    name: "JavaScript",
    description: "",
    onClick: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    image: "/ts.jpg",
    ImgTitle: "typescript logo",
    name: "TypeScript",
    description: "",
    onClick: "https://www.typescriptlang.org/docs/",
  },
  {
    image: "/react.png",
    ImgTitle: "react logo",
    name: "React",
    description: "",
    onClick: "https://legacy.reactjs.org/tutorial/tutorial.html",
  },
  {
    image: "/next2.jpg",
    ImgTitle: "next.js logo",
    name: "Next.js",
    description: "",
    onClick: "https://nextjs.org/docs",
  },
  {
    image: "/node.png",
    ImgTitle: "node.js logo",
    name: "Node.js",
    description: "",
    onClick: "https://nodejs.org/en/about",
  },
  {
    image: "/sql.jpg",
    ImgTitle: "sql logo",
    name: "SQL",
    description: "",
    onClick: "https://sqlbolt.com/",
  },
  {
    image: "/mysql.png",
    ImgTitle: "MySql logo",
    name: "MySQL",
    description: "",
    onClick: "https://dev.mysql.com/doc/mysql-getting-started/en/",
  },
  {
    image: "/psql.jpg",
    ImgTitle: "psql logo",
    name: "PostgreSQL",
    description: "",
    onClick: "https://www.postgresql.org/docs/current/tutorial.html",
  },
  {
    image: "/mongodb.jpg",
    ImgTitle: "mongodb logo",
    name: "MongoDB",
    description: "",
    onClick: "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
  },
  {
    image: "/prisma.png",
    ImgTitle: "prisma logo",
    name: "Prisma",
    description: "",
    onClick: "https://www.prisma.io/",
  },

  {
    image: "/git.png",
    ImgTitle: "git logo",
    name: "Git",
    description: "",
    onClick: "https://git-scm.com/",
  },
  {
    image: "aws.png",
    ImgTitle: "aws logo",
    name: "AWS",
    description: "",
    onClick: "https://aws.amazon.com/getting-started/hands-on/?getting-started-all.sort-by=item.additionalFields.content-latest-publish-date&getting-started-all.sort-order=desc&awsf.getting-started-category=*all&awsf.getting-started-content-type=*all",
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
