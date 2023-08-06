import work1 from "@/public/work1.jpg";
import work2 from "@/public/work2.jpg";
import work3 from "@/public/work3.jpg";
import work4 from "@/public/work4.jpg";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

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
              <div className="my-6">AI Generator</div>
              <div className="mb-5">
                An AI generator that generates code, video, images, music and
                talks with you.
              </div>
              <div className="rounded-lg bg-teal-500 p-2 px-3 flex">
                View
                <ArrowRightIcon className="ml-1 w-5" />
              </div>
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
              <div className="my-6">AI Generator</div>
              <div className="mb-5">
                An AI generator that generates code, video, images, music and
                talks with you.
              </div>
              <div className="rounded-lg bg-teal-500 p-2 px-3 flex">
                View
                <ArrowRightIcon className="ml-1 w-5" />
              </div>
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
              <div className="my-6">AI Generator</div>
              <div className="mb-5">
                An AI generator that generates code, video, images, music and
                talks with you.
              </div>
              <div className="rounded-lg bg-teal-500 p-2 px-3 flex">
                View
                <ArrowRightIcon className="ml-1 w-5" />
              </div>
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
              <div className="my-6">AI Generator</div>
              <div className="mb-5">
                An AI generator that generates code, video, images, music and
                talks with you.
              </div>
              <div className="rounded-lg bg-teal-500 p-2 px-3 flex">
                View
                <ArrowRightIcon className="ml-1 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
