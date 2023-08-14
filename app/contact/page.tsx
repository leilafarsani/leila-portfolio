import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="text-white text-center p-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Connect!</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-400">
          Feel free to reach out for any inquiries or collaboration
          opportunities.
        </p>
        <p className="text-xl mb-6">
          <FaEnvelope className="inline text-xl mr-2" />
          <Link
            href="mailto:leilafarsani@gmail.com"
            className="hover:text-blue-500"
          >
            leilafarsani@gmail.com
          </Link>
        </p>
        <p className="text-xl mb-6">
          <FaPhoneAlt className="inline text-xl mr-2" />
          <Link href="tel:+1234567890" className="hover:text-blue-500">
            +44 7465872787
          </Link>
        </p>

        <div className="flex justify-center space-x-6 mt-6">
          <Link
            href="https://bit.ly/3YwlJma"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link
            href="https://github.com/leilafarsani"
            className="text-gray-400 hover:text-gray-500 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
