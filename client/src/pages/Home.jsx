import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import aboutImg1 from '../assets/group.jpg';

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Content */}
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="mb-4 text-3xl" data-aos="fade-up">
              Title here
            </h1>
            <p className="mb-8" data-aos="fade-up" data-aos-delay="200">
              Description
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn p-2 rounded bg-cyan hover:bg-cyan_secondary w-full mb-4 sm:w-auto sm:mb-0"
                  href="#0"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

        <hr className="border border-cyan w-[25rem] mx-auto my-[5rem]"/>
      {/* About */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="title text-3xl">
            About
        </h1>
        <About 
        imgFirst={false}
        title = "Title"
        description = "Content lora jasdas asdasd aadsas adasd adsasd adasaf sad asdadsa "
        img = {aboutImg1}
        />
        <About 
        imgFirst={true}
        title = "Title"
        description = "sad asdas asd aasda sad asda asda sad asda asdas"
        img = "https://www.mic.gov.in/assets/img/iic-logo.png"
        />
        </div>
      </div>
    </>
  );
}
