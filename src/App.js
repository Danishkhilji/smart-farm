import { Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";

import Dashboard from './page/dashboard/Dashboard'
import Dashboard2 from "./page/dashboard/index";
import Feature from "./page/Feature";
import AboutUs from "./page/AboutUs";
const App = () => {
  return (
    <div>
      {/* <Checkbox /> */}
      <Routes>
        {/* without login */}
        <Route path="/" element={<Landing />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route  path="/features" element={<Feature />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route  path={`/about`} element={<AboutUs />}/>
      </Routes>
    </div>
  );
};

export default App;

