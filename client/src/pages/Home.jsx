import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import aboutImg1 from '../assets/images/about5.jpg';
import aboutImg2 from '../assets/images/about4.jpg';

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
            <h1 className="mb-4 text-6xl" data-aos="fade-up">
              Welcome to IIC - Fostering Innovation at <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-cyan to-white">DCRUST</span>
            </h1>
            <p className="mb-8 leading-6" data-aos="fade-up" data-aos-delay="200">
              Explore the Innovation Culture at Deenbandhu Chhotu Ram University Of Science And Technology through the Institute Innovation Council (IIC). Join us in nurturing innovation and entrepreneurship among students and faculty.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn px-4 py-2 rounded-lg text-black bg-cyan hover:bg-cyan_secondary w-full sm:w-auto sm:mb-0"
                  href="#0"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-cyan w-[15rem] sm:w-[25rem] mx-auto my-[5rem]" />
      {/* About */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="title text-4xl text-cyan font-bold" data-aos="fade-up">
            About
          </h1>
          <About
            imgFirst={false}
            title="Our Journey"
            description="Discover the evolution of IIC at DCRUST, initiated under the leadership of Hon’ble Vice Chancellor, Prof. (Dr.) Rajendrakumar Anayath. We have been fostering innovation in line with the Ministry of HRD's guidelines."
            img="https://www.mic.gov.in/assets/img/iic-logo.png"
          />
          <About
            imgFirst={true}
            title="Vision and Mission"
            description="Our vision is to create a vibrant ecosystem for innovation and entrepreneurship within our institution. Explore our mission to engage students and faculty in ideation, problem-solving, and turning innovative ideas into startups."
            img={aboutImg1}
          />
          <About
            imgFirst={false}
            title="What We Do"
            description="At IIC, we are dedicated to nurturing the culture of innovation. We conduct various activities, identify and reward innovations, organize workshops and seminars, and provide mentorship to students, transforming their ideas into prototypes and startups."
            img={aboutImg2}
          />
        </div>
      </div>
    </>
  );
}
