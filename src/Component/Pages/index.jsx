import Footer from "./footer/Footer";
import Hero from "./LandingPage/Hero";
import PayPetalDelivers from "./LandingPage/PayPetalDelivers";
import PayPetalDifferent from "../Pages/about/content/PaypetalDifferent";
import JoinTheMovement from "../Pages/about/content/JoinTheMovement";
import VisionMission from "../Pages/about/content/VisionMission";
import HaveQuestions from "./Question/HaveQuestions";

const Main = () => {
  return (
    <div>
      <Hero />
      <PayPetalDifferent />
      <JoinTheMovement />
      <VisionMission />
      <PayPetalDelivers />
      <HaveQuestions />
      <Footer />
    </div>
  );
};

export default Main;
