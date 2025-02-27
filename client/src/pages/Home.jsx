import Header from "../components/Header";
import ItSupport from "../components/ItSupport";
import OurServices from "../components/OurServices";
import TeamCarousel from "../components/OurTeam";
import Technologies from "../components/Technologies";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  return (
    <>
      <Header />
      <OurServices />
      <ItSupport />
      <Technologies />
      <TestimonialSlider />
      <TeamCarousel />
    </>
  );
};

export default Home;
