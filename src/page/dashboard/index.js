import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import PlotGraph from "../LiveSensorsData/plotGraph";
import classes from "./Dashboard.module.css"
const Dashboard2 = () => {
  return (
    <>
        {/* <section> */}
          <Header  withLogo={true} />
         <PlotGraph />
        {/* </section> */}
    </>
  );
};

export default Dashboard2;
