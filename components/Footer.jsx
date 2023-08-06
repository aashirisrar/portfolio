import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="my-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl  text-teal-500 text-center">Aashir Israr</h2>
          <div className="flex gap-6 justify-center text-white">
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
          <div className="text-white text-center text-sm">
            Copyright @ 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
