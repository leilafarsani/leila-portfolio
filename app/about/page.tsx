import React from "react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">About Me</h1>
        <p className="text-l mb-12">
          Passionate about the realm of software development, and armed with a
          Mathematics PhD. I bring a skillset enriched in research, data
          modeling, and coding. My knack for creative problem-solving and
          step-by-step thinking sets me apart. I'm on a constant journey of
          learning, eager to create fresh and exciting web solutions. A true
          team player, I value effective communication and camaraderie. I can't
          wait to dive in and craft web experiences that leave an impact!
        </p>

        <div className="mb-12">
          <SectionCard
            title="Education"
            content={`Full Stack Development Bootcamp, CodeYourFuture, London, UK\nDoctorate in Mathematics, University of Sussex, Brighton, UK\nFirst Class Honours , Bachelor's Degree Accounting, Isfahan, Iran\nMathematics , First Class Honours Diploma , Isfahan, Iran`}
          />
        </div>

        <div className="mb-12">
          <SectionCard
            title="Experience"
            content={`Tech Volunteering, CodeYourFuture, London\nMathematics Teaching, Private Lessons, Hybrid\nExamination Reader, Scribe, and Invigilator, University of Sussex, Brighton\nAssociate Tutor, University of Sussex, Brighton`}
          />
        </div>
        <div className="mb-12">
          <SectionCard
            title="Hobbies"
            content={`Dancing\nPhotography\nSolving puzzles\nPlaying the Tar instrument\nExploring Psychology and philosophy`}
          />
        </div>

        <Link
          href="https://drive.google.com/file/d/1ezLWOoP32tMzuJ2Y1iOGiw6tMin_yyVU/view"
          className="bg-grey-900 text-black px-6 py-3 rounded-md hover:bg-grey-700 transition duration-300 inline-flex items-center"
          target="_blank"
        >
          Download CV <FaDownload className="ml-3" />
        </Link>
      </div>
    </div>
  );
}

interface SectionCardProps {
  title: string; 
  content: string;
}

function SectionCard({ title, content }: SectionCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 md:w-1/2 mx-auto transform transition-transform hover:scale-105">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div>
        <ul className="list-disc list-inside text-sm">
          {content.split("\n").map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
