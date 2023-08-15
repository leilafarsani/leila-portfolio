import Links from "../Links";
import { motion } from "framer-motion";


const NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
    last: true,
  },
];

interface Bol {
  drop: any;
  setDrop: any;
}

export default function DropMenu({ drop, setDrop }: Bol) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bg-white top-5 right-5 left-5 rounded-3xl shadow-2xl shadow-slate-800 z-50 "
      onClick={() => setDrop(false)}
    >
      <nav className="flex flex-col">
        <ul className="min-h-[40rem] rounded-3xl lg:min-h-[15rem] h-[100%] flex flex-wrap lg:flex-nowrap uppercase text-center text-[1.7rem]">
          {NavLinks.map((item) => (
            <Links name={item.name} path={item.path} last={item.last} />
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
