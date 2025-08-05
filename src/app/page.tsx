import AboutMe from "@/components/AboutMe";
import { Brands } from "@/components/Brands";
import { Channels } from "@/components/Channels";
import ContactUs from "@/components/ContactUs";
import FooterContent from "@/components/FooterContent";
import {HeroSection} from "@/components/Home";
import Navbar from "@/components/Navbar";
import { Team } from "@/components/Team";
import Image from "next/image";


export default function Home() {
  return (
   <>
   <Navbar />
   <HeroSection/>
   <AboutMe
        experience={5}
        happyClients={100}
        deliveredProjects={50}
        profileImageSrc="/Images/NayanPfp.png"
      />
   <Channels/>
   <Team/>
   <Brands/>
   <ContactUs/>
   <FooterContent/>
   </>
  );
}
