import Footer from "./footer/Footer";
import Hero from "./LandingPage/Hero";
import PayPetalDelivers from "./LandingPage/PayPetalDelivers";
import PayPetalDifferent from "../Pages/about/content/PaypetalDifferent";
import JoinTheMovement from "../Pages/about/content/JoinTheMovement";
import HaveQuestions from "./Question/HaveQuestions";

const Main = () => {
  return (
    <div>
      <Hero />
      <PayPetalDifferent />
      <JoinTheMovement />
      <PayPetalDelivers />
      <HaveQuestions />
      <Footer />
    </div>
  );
};

export default Main;
