import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import aboutImg1 from '../assets/images/about5.jpg';
import aboutImg2 from '../assets/images/about4.jpg';
import mainImg from '../assets/images/i2.jpg';
import dcrustImg from '../assets/images/dcrust2.jpg';

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  function popUp(){
    alert("Will be Available Soon ! ")
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 sm:flex sm:flex-row gap-5">
        {/* Content */}
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="mb-4 text-6xl" data-aos="fade-up">
              Welcome to Institution's Innovation Council - <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-cyan to-white">DCRUST</span>
            </h1>
            <p className="mb-8 leading-6" data-aos="fade-up" data-aos-delay="200">
              Explore the Innovation Culture at Deenbandhu Chhotu Ram University Of Science And Technology through the Institution's Innovation Council (IIC). We are nurturing innovation and entrepreneurship among students and faculty.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn px-4 py-2 rounded-lg text-black bg-cyan hover:bg-cyan_secondary w-full sm:w-auto sm:mb-0"
                  href="#0"
                  onClick={popUp}
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="img sm:max-w-[50%] m-auto">
          <img className="border border-cyan rounded-xl" src={mainImg} alt="" />
        </div>
      </div>

      <hr className="border border-cyan w-[15rem] sm:w-[25rem] mx-auto my-[5rem]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 sm:flex sm:flex-col gap-2">
        <div className="img sm:max-w-[50%] mx-auto">
          <img className="border border-cyan rounded-xl" src={dcrustImg} alt="" />
        </div>  
      
        {/* Content */}
        <div className="pt-16  md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
            <h1 className="mb-4 text-3xl" data-aos="fade-up">
              Deenbandhu Chhotu Ram University of Science and Technology, Murthal, Sonepat, Haryana
            </h1>
            <p className="mb-4 leading-6" data-aos="fade-up" data-aos-delay="200">
              NAAC Accredited University, Pin code - 131027
            </p>
          </div>
        </div>
      </div>


      <hr className="border border-cyan w-[15rem] sm:w-[25rem] mx-auto my-[5rem]" />

      {/* Board */}
      <div className="board max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="title text-4xl text-cyan font-bold" data-aos="fade-up">
            Update
          </h1>
          <div className="content border border-cyan rounded p-6 sm:w-[40rem] h-[10rem] my-10 mx-auto flex justify-center" data-aos="fade-up">
            <h1 className="text-3xl">No Announcement !</h1>
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
            description="Discover the evolution of IIC at DCRUST, initiated under the leadership of Hon’ble Vice Chancellor, Prof. Shree Prakash Singh. We have been fostering innovation in line with the Ministry of HRD's guidelines."
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
