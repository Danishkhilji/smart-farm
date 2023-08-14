import Header from "../../components/Navbar";
import classes from "./Landing.module.css";
import KeyFeature from "../../components/KeyFeatureCard";
import { GiCrossedChains } from "react-icons/gi";
import { FaStream } from "react-icons/fa";
import { PiPlantThin } from "react-icons/pi";
import { BsClipboardData } from "react-icons/bs";
import { Row, Col,Container } from "react-bootstrap";
import { plant } from "../../constant/imagePath";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Landing = () => {
  const navigate = useNavigate()
  const ketFeatures = [
    {
      id: "1",
      title: "Real-Time Data Visualization",
      Icon: <BsClipboardData color={"var(--main-color)"} size={60} />,
    },
    {
      id: "2",
      title: "Hardware Integration",
      Icon: <GiCrossedChains color={"var(--main-color)"} size={60} />,
    },
    {
      id: "3",
      title: "Real-Time Data Streaming",
      Icon: <FaStream color={"var(--main-color)"} size={60} />,
    },
    {
      id: "4",
      title: "Ideal Plant Condition",
      Icon: <PiPlantThin color={"var(--main-color)"} size={60} />,
    },
  ];
  return (
    <>
      <Header />

      <section className={classes["mainLanding"]}>
        <div className={classes["mainLanding-innerWrapper"]}>
          <div className={classes["caption"]}>
            <h1 className={classes["mainHeading"]}>
              IOT ENABLED SMART VERTICAL FARMING MONITORING SYSTEM
            </h1>
            <p className={classes["description"]}>
              {" "}
              Welcome to our Plant monitoring web application designed to help
              you take better care of your plants by providing real-time
              insights and controls for optimal growth. Whether you're a
              seasoned gardener or just getting started with indoor or outdoor
              plants, our dashboard makes plant care a breeze.
            </p>
          </div>
        </div>
      </section>

      <section className={classes["featureSec"]}>
        <h2>Key Features</h2>
        <Container>
        <Row>
          {ketFeatures?.map((feature) => (
            <Col lg={3} md={6}>
              <KeyFeature
                key={feature?.id}
                title={feature?.title}
                Icon={feature?.Icon}
              />
            </Col>
          ))}
        </Row>
        </Container>
      </section>

      <section className={classes["featureSec"]}>
        <h2 className={classes["mb-2rem"]}>How Its wok</h2>
        <Container>
        <Row className={classes["change-order"]}>
          <Col lg={6}>
            <div className={classes["content"]}>
              <p>
                The web application continuously gathers real-time data from
                Ubidots IoT platform's sensors like temperature, humidity,
                light, and soil moisture. This data is showcased through
                interactive charts on the "Live Sensor Data" page, updating
                automatically. It's compared with predefined optimal conditions
                for plant growth, generating a "MODERATE" status if conditions
                are met. Deviations trigger status changes and alerts for
                adjustments. The app refreshes data every 2 minutes, notifying
                users of updates and enabling real-time monitoring without
                manual intervention.
              </p>
              <Button label={`Learn more `} onClick={()=>{navigate("/about")}} />
            </div>

           


          </Col>

          <Col lg={6}>
            <div className={classes["img-wrapper"]}>
          <img src={plant} alt="plant" />
          </div>
          </Col>
        </Row>
        </Container>
      </section>
      <Footer />

    </>
  );
};

export default Landing;
