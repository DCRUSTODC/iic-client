import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImg from "../assets/images/dcrust.jpeg"

export default function Contact() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
    return (
      <>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 sm:flex sm:flex-row gap-5">
        {/* Content */}
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="mb-4 text-6xl" data-aos="fade-up">
              About <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-cyan to-white">DCRUST</span>
            </h1>
            <p className="mb-8 leading-6" data-aos="fade-up" data-aos-delay="200">
            Deenbandhu Chhotu Ram University of Science & Technology, Murthal came into being on 6th November 2006 by upgrading erstwhile Chhotu Ram State College of Engineering, Murthal through an Act 29 of 2006 of the Legislature of the state of Haryana with the vision to facilitate and promote studies and research in emerging areas of higher education with focus on new frontiers of science, engineering, technology, architecture and management studies, humanities, and also to achieve excellence in these and connected fields. The University has been considered eligible for grants under Section 12(B) of UGC Act, 1956 in March, 2009. The University has got affiliating status and the technical and professional College/Institutes located in the District Sonepat have been affiliated to the University. Six B.Tech programmes of the University have also been accredited by National Board of Accreditation (NBA).
            </p>
           
          </div>
        </div>
        <div className="img sm:max-w-[50%] m-auto">
          <img className="border border-cyan rounded-xl" src={contactImg} alt="" />
        </div>
      </div>

      <hr className="border border-cyan w-[15rem] sm:w-[25rem] mx-auto my-[5rem]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="title text-4xl text-cyan font-bold" data-aos="fade-up">
            Contact Us
          </h1>
          <div className="flex mb-20 sm:mb-40 gap-4" data-aos="fade-up" data-aos-delay="200">
            <div>
            <p className="text-2xl font-bold">
              Website :
            </p>
            <p className="text-2xl font-bold">
              Email-ID :
            </p>
            <p className="text-2xl font-bold">
              Contact :
            </p>
            </div>
            <div>
            <p className="text-2xl">
            https://www.dcrustm.ac.in/
            </p>
            <p className="text-2xl">
            info@dcrustm.org
            </p>
            <p className="text-2xl">
            0130-2484173
            </p>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}