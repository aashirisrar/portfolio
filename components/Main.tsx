import { Github, Linkedin, Twitter } from "lucide-react";
import avatar from "@/public/avatar.png";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <section id="home">
      <div className="w-full mt-16  md:mt-36">
        <div className="flex flex-col gap-2 items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl text-teal-500">Aashir Israr</h2>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-white">
              Web Developer.
            </h3>
          </div>
          <div>
            <h4 className="lg:w-[36rem] md:w-[26rem] w-[16rem] text-center text-sm sm:text-lg mt-2 font-extralight text-white">
              Experienced web developer with a passion for crafting interactive
              and visually engaging websites. Adept in front-end technologies.
            </h4>
          </div>
          <div className="mt-4 text-white/80 flex gap-10">
            <Link target="_blank" href="https://twitter.com/aashir_israr">
              <Twitter />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aashir-israr/"
            >
              <Linkedin />
            </Link>
            <Link target="_blank" href="https://github.com/aashirisrar">
              <Github />
            </Link>
          </div>
          <div className="mt-10 relative overflow-hidden w-48 h-48  sm:w-80 sm:h-80 rounded-full bg-gradient-to-b from-teal-500">
            <Image
              src={avatar}
              layout="fill"
              objectFit="cover"
              alt="profile_img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
