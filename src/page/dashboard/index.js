import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import SidebarSkeleton from "../../components/SidebarSkeleton";
import PlotGraph from "../LiveSensorsData/plotGraph";
import classes from "./Dashboard.module.css"

// A super simple expandable component.

const Dashboard2 = () => {



  useEffect(() => {
   
  }, []);

  const options = [
    { label: "3", value: "3" },
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "All", value: "all" },
  ];

  //Rendering Input fields


  return (
    <>
      <SidebarSkeleton>
        <section>
          <Header className={classes["py-15"]} withLogo={false} />
         <PlotGraph />
   
          <Footer />
        </section>
      </SidebarSkeleton>
    </>
  );
};

export default Dashboard2;
