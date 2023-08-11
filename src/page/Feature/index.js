import React from "react";
import classes from "./Feature.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { GiCrossedChains } from "react-icons/gi";
import KeyFeature from "../../components/KeyFeatureCard";
import { FaStream } from "react-icons/fa";
import { PiPlantThin } from "react-icons/pi";
import { BsClipboardData } from "react-icons/bs";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
const Feature = () => {
  const ContentIcon = ({ icon }) => {
    return (
      <Col md={6}>
        <div className={classes["frame-wrapper"]}>
          <KeyFeature
            customStyle={{
              maxWidth: "280px",
              height: "100%",
              minHeight:"230px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
            Icon={icon}
          />
        </div>
      </Col>
    );
  };
  const ContentDescription = ({ heading, description }) => {
    return (
      <Col md={6}>
        <div
          className={classes["section-content"]}
          
        >
          <h2 className={classes["main-heading"]}>{heading}</h2>
          <p>{description}</p>
        </div>
      </Col>
    );
  };
  const listOfItems = [
    {
      id: "1",
      heading: "Real-Time Data Visualization",
      description: ` Stay connected to your plants'
    well-being with live updates of essential environmental data. Our
    dashboard presents temperature, humidity, light levels, and soil
    moisture levels in visually appealing and easy-to-understand charts
    and graphs.`,
      icon: <BsClipboardData size={45} />,
    },
    {
      id: "2",
      heading: "Hardware Integration",
      description: `Connect compatible sensors and actuators to your
    plants. Our dashboard supports a wide range of IoT devices and
    microcontrollers, making it easy to integrate your existing plant care
    setup.`,

      icon: <GiCrossedChains size={45} />,
    },
    {
      id: "3",
      heading: " Real-Time Data Streaming",
      description: `Once connected, our web application receives
  real-time data from your sensors, updating the dashboard with live
  information on temperature, humidity, and more.`,
      icon: <FaStream size={45} />,
    },
    {
      id: "4",
      heading: `Ideal Plant Conditions:`,
      description: `Not sure if your plant's environment is
    suitable? Our application compares real-time data with ideal plant
    conditions and alerts you if any parameters are outside the desired
    range, allowing you to take corrective action.`,
      icon: <PiPlantThin size={45} />,
    },
  ];

  return (
    <>
<Header />
    <h1 className={classes["heading"]}>Key Feature</h1>
      {listOfItems?.map((item, index) => {
        const renderContent = [
          <ContentIcon icon={item?.icon} key={`1`} />,
          <ContentDescription
            key={`2`}
            heading={item?.heading}
            description={item?.description}
          />,
        ];
        let temp = null;
        if (index % 2 == 0) {
          temp = renderContent[1];
          renderContent[1] = renderContent[0];
          renderContent[0] = temp;
        }

        return (
          <section className={classes["section-content"]}>
            <Container>
              <Row className={index % 2 === 0 ? classes["grid-container"] : ""}>
                {renderContent[0]}
                {renderContent[1]}
              </Row>
            </Container>
          </section>
        );
      })}

      <Footer  className={classes["footer"]} />
      {/* <section className={classes["section-content"]}>
        <h1 className={classes["heading"]}>AboutUs</h1>
        <Container>
          <Row className={classes["grid-container"]}>
            <Col lg={6}>
              <div className={classes["section-content"]}>
                <h2 className={classes["main-heading"]}>Live Sensor Data</h2>
                <p>
                  On the "Live Sensor Data" page, our web application will
                  continuously fetch real-time data from the Ubidots IoT
                  platform, which is integrated into our web. The data will
                  include information from various sensors, such as temperature,
                  humidity, light levels, and soil moisture.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className={classes["frame-wrapper"]}>
                <KeyFeature
                  customStyle={{
                    maxWidth: "50%",
                    height: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  Icon={<BsClipboardData size={45} />}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={classes["section-content"]}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={classes["frame-wrapper"]}>
                <KeyFeature
                  customStyle={{
                    maxWidth: "50%",
                    height: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  Icon={<BsClipboardData size={45} />}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className={classes["section-content"]}>
                <h2 className={classes["main-heading"]}> Data Visualization</h2>
                <p>
                  The fetched data will be beautifully visualized on the "Live
                  Sensor Data" page through interactive charts and graphs. Users
                  will be able to see the current values of each sensor in
                  real-time. The dynamic charts will update automatically as new
                  data is received
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={classes["section-content"]}>
        <Container>
          <Row className={classes["grid-container"]}>
            <Col lg={6}>
              <div className={classes["section-content"]}>
                <h2 className={classes["main-heading"]}>
                  Comparison with Ideal Conditions
                </h2>
                <p>
                  will compare the real-time sensor data with the predefined
                  ideal conditions for each parameter. The ideal conditions
                  represent the optimal range in which the plants thrive.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className={classes["frame-wrapper"]}>
                <KeyFeature
                  customStyle={{
                    maxWidth: "50%",
                    height: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  Icon={<BsClipboardData size={45} />}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Feature;
