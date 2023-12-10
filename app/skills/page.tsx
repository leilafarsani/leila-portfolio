"use client"

import React from "react";
import { useRouter } from "next/navigation";
import SkillsCard from "./SkillsCard";

const card = [
  {
    image: "/html.png",
    ImgTitle: "html logo",
    name: "HTML",
    description: "Markup language for structuring web content",
    onClick: "https://www.w3schools.com/html/default.asp",
  },
  {
    image: "/css.jpg",
    ImgTitle: "css logo",
    name: "CSS",
    description: "Styling language for web design",
    onClick: "https://www.w3schools.com/css/default.asp",
  },
  {
    image: "/js.png",
    ImgTitle: "javascript logo",
    name: "JavaScript",
    description: "Scripting language for web interactivity",
    onClick: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    image: "/ts.jpg",
    ImgTitle: "typescript logo",
    name: "TypeScript",
    description: "Typed superset of JavaScript",
    onClick: "https://www.typescriptlang.org/docs/",
  },
  {
    image: "/python.svg",
    ImgTitle: "python logo",
    name: "Python",
    description: "Versatile, readable programming language.",
    onClick: "https://docs.python.org/3/",
  },
  {
    image: "/Power-BI-Logo.png",
    ImgTitle: "Power-BI logo",
    name: "Power BI",
    description: "Microsoft's business analytics tool for data visualization and insights.",
    onClick: "https://learn.microsoft.com/en-us/power-bi/",
  },
  {
    image: "/react.png",
    ImgTitle: "react logo",
    name: "React",
    description: "JavaScript library for building UIs",
    onClick: "https://legacy.reactjs.org/tutorial/tutorial.html",
  },
  {
    image: "/next2.jpg",
    ImgTitle: "next.js logo",
    name: "Next.js",
    description: "Server-rendered React framework",
    onClick: "https://nextjs.org/docs",
  },
  {
    image: "/node.png",
    ImgTitle: "node.js logo",
    name: "Node.js",
    description: "JavaScript runtime environment",
    onClick: "https://nodejs.org/en/about",
  },
  {
    image: "/sql.jpg",
    ImgTitle: "sql logo",
    name: "SQL",
    description: "Database query and management language",
    onClick: "https://sqlbolt.com/",
  },
  {
    image: "/mysql.png",
    ImgTitle: "MySql logo",
    name: "MySQL",
    description: "Relational database management system",
    onClick: "https://dev.mysql.com/doc/mysql-getting-started/en/",
  },
  {
    image: "/psql.jpg",
    ImgTitle: "psql logo",
    name: "PostgreSQL",
    description: "Relational database management system",
    onClick: "https://www.postgresql.org/docs/current/tutorial.html",
  },
  {
    image: "/mongodb.jpg",
    ImgTitle: "mongodb logo",
    name: "MongoDB",
    description: "NoSQL database management system",
    onClick: "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
  },
  {
    image: "/prisma.png",
    ImgTitle: "prisma logo",
    name: "Prisma",
    description: "Type-safe database toolkit",
    onClick: "https://www.prisma.io/",
  },

  {
    image: "/git.png",
    ImgTitle: "git logo",
    name: "Git",
    description: "Version control system",
    onClick: "https://git-scm.com/",
  },
  {
    image: "aws.png",
    ImgTitle: "aws logo",
    name: "AWS",
    description: "Cloud services provider",
    onClick:
      "https://aws.amazon.com/getting-started/hands-on/?getting-started-all.sort-by=item.additionalFields.content-latest-publish-date&getting-started-all.sort-order=desc&awsf.getting-started-category=*all&awsf.getting-started-content-type=*all",
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-6xl text-center font-bold mb-20">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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






