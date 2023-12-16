import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HoreSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
