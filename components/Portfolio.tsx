import work1 from "@/public/work1.jpg";
import work2 from "@/public/work2.jpg";
import work3 from "@/public/work3.jpg";
import work4 from "@/public/work4.jpg";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="my-24">
        <h2 className="text-4xl sm:text-6xl text-teal-500 text-center">
          Portfolio
        </h2>

        <div
          className="
        flex justify-center my-8 gap-3"
        >
          <div className="bg-teal-500 text-white p-2 rounded-lg">Apps</div>
          <div className="bg-teal-500 text-white p-2 rounded-lg">Web</div>
        </div>

        <div className="px-8">
          <div className="text-white mt-12 flex justify-center gap-6 flex-wrap">
            <div className="flex flex-col items-center text-center bg-[#20293d] w-[24rem] p-6 sm:p-8 rounded-lg">
              <div>
                <Image
                  className="rounded-lg"
                  width="400"
                  src={work1}
                  alt="work1"
                ></Image>
              </div>
              <div className="my-6 text-xl">AI Generator</div>
              <div className="mb-8">
                An AI generator that generates code, video, images, music and
                talks with you.
              </div>
              <Link
                target="_blank"
                href="https://saas-ai-app.vercel.app/"
                className="rounded-lg bg-teal-500 p-2 px-3 flex hover:bg-teal-500/90 transition group"
              >
                View
                <ArrowRightIcon className="ml-1 w-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center bg-[#20293d]  ; w-[24rem] p-8 rounded-lg">
              <div>
                <Image
                  className="rounded-lg"
                  width="400"
                  src={work2}
                  alt="work2"
                ></Image>
              </div>
              <div className="my-6 text-xl">AI Article Summarizer</div>
              <div className="mb-8">
                An AI article summarizer that summarizes a website complete
                text.
              </div>
              <Link
                href="https://articlesummarizergpt4.netlify.app/"
                target="_blank"
                className="rounded-lg bg-teal-500 p-2 px-3 hover:bg-teal-500/90 transition flex group"
              >
                View
                <ArrowRightIcon className="ml-1 w-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          <div className="text-white mt-6 flex justify-center gap-6 flex-wrap">
            <div className="flex flex-col items-center text-center bg-[#20293d]  ; w-[24rem] p-8 rounded-lg">
              <div>
                <Image
                  className="rounded-lg"
                  width="400"
                  src={work3}
                  alt="work1"
                ></Image>
              </div>
              <div className="my-6 text-lg">Recipe App</div>
              <div className="mb-8">
                A recipe app that has thousands of recipes.
              </div>
              <Link
                href="https://react-recipe-app-3.netlify.app/"
                target="_blank"
                className="rounded-lg bg-teal-500 p-2 px-3 hover:bg-teal-500/90 transition flex group"
              >
                View
                <ArrowRightIcon className="ml-1 w-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center bg-[#20293d]  ; w-[24rem] p-8 rounded-lg">
              <div>
                <Image
                  className="rounded-lg"
                  width="400"
                  src={work4}
                  alt="work1"
                ></Image>
              </div>
              <div className="my-6 text-lg">Ecommerce Website</div>
              <div className="mb-8">
                An ecommerce app with shop and cart options.
              </div>
              <Link
                href="https://react-ecommerce-3.netlify.app/"
                target="_blank"
                className="rounded-lg bg-teal-500 p-2 px-3 hover:bg-teal-500/90 transition flex group"
              >
                View
                <ArrowRightIcon className="ml-1 w-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
