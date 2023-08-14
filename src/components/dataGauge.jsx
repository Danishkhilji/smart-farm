// import React from "react";
// import ReactGauge from "react-gauge-component";

// const GaugeComponent = ({ value, title, message }) => {
//   let subArcs = [];
//   let maxLimit = 0;

//   if (title === "Water Level") {
//     subArcs = [
//       { 
//         limit: 200, 
//         color: '#EA4228', 
//         showMark: true ,
//         tooltip: { text: 'Too low water level!' }
//       },

//       { 
//         limit: 300, 
//         color: '#F5CD19', 
//         showMark: true,
//         tooltip: { text: 'low water level!' } 
//       },
//       { 
//         limit: 400, 
//         color: '#5BE12C', 
//         showMark: true,
//         tooltip: { text: 'Optimal water level!' }
//       },
//       { 
//         limit: 500, 
//         color: '#F5CD19', 
//         showMark: true,
//         tooltip: { text: 'High water level!' }
//       },
//       { 
//         color: '#EA4228',
//         tooltip: { text: 'Too high temperature!' }
//       }
//     ]
//     maxLimit = 700;
//   } else if (title === "pH Level") {
//     subArcs = [
//       { 
//         limit: 4.5, 
//         color: '#EA4228', 
//         showMark: true,
//         tooltip: { text: 'Too low pH level!' } 
//       },
//       { 
//         limit: 5.5, 
//         color: '#F5CD19', 
//         showMark: true,
//         tooltip: { text: 'Low pH level!' }
//       },
//       { 
//         limit: 6.5, 
//         color: '#5BE12C', 
//         showMark: true,
//         tooltip: { text: 'Optimal pH level!' }
//       },
//       { 
//         limit: 7.5, 
//         color: '#F5CD19', 
//         showMark: true ,
//         tooltip: { text: 'High pH level!' }
//       },

//       { 
//         color: '#EA4228',
//         tooltip: { text: 'Too high pH level!' }
//       }
//     ]
//     maxLimit = 14;  
//   } else if (title === "LDR Level") {
//     subArcs = [
//       { 
//         limit: 100, 
//         color: '#EA4228', 
//         showMark: true ,
//         tooltip: { text: 'Low LDR!' }
//       },
//       { 
//         limit: 800, 
//         color: '#5BE12C', 
//         showMark: true,
//         tooltip: { text: 'Optimal LDR level!' }
//       },
//       { 
//         color: '#EA4228',
//         tooltip: { text: 'High LDR!' }
//       }
//     ]
//     maxLimit = 1000;
//   }

//   const formatValue = (value) => value.toString();

//   return (
//     <div>
//       <ReactGauge
//         id="temperature-gauge"
//         arc={{
//           width: 0.2,
//           padding: 0.01,
//           subArcs: subArcs
//         }}
//         needle={{
//           color: '#345243',
//           length: 0.90,
//           width: 15,
//           animDelay: 200,
//         }}
//         value={value}
//         labels={{
//           valueLabel: {
//             fontSize: 40,
//             formatTextValue: formatValue,
//           },
//         }}
//         minValue={0}
//         maxValue={maxLimit}
//       />
//       <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>{title}</div>
//       <div style={{ textAlign: "center", marginTop: "10px", color: message === "Optimal" ? "white" : "red" }}>
//         {message}
//       </div>
//     </div>
//   );
// };

// export default GaugeComponent;


import React from "react";
import ReactGauge from "react-gauge-component";

const GaugeComponent = ({ value, title, message }) => {
  let subArcs = [];
  let maxLimit = 0;

  if (title === "Water Level") {
    subArcs = [
      { 
        limit: 200, 
        color: '#EA4228', 
        showMark: true ,
        tooltip: { text: 'Too low water level!' }
      },

      { 
        limit: 300, 
        color: '#F5CD19', 
        showMark: true,
        tooltip: { text: 'Low water level!' } 
      },
      { 
        limit: 400, 
        color: '#5BE12C', 
        showMark: true,
        tooltip: { text: 'Optimal water level!' }
      },
      { 
        limit: 500, 
        color: '#F5CD19', 
        showMark: true,
        tooltip: { text: 'High water level!' }
      },
      { 
        color: '#EA4228',
        tooltip: { text: 'Too high water level!' }
      }
    ]
    maxLimit = 700;
  } else if (title === "pH Level") {
    subArcs = [
      { 
        limit: 4.5, 
        color: '#EA4228', 
        showMark: true,
        tooltip: { text: 'Too low pH level!' } 
      },
      { 
        limit: 5.5, 
        color: '#F5CD19', 
        showMark: true,
        tooltip: { text: 'Low pH level!' }
      },
      { 
        limit: 6.5, 
        color: '#5BE12C', 
        showMark: true,
        tooltip: { text: 'Optimal pH level!' }
      },
      { 
        limit: 7.5, 
        color: '#F5CD19', 
        showMark: true ,
        tooltip: { text: 'High pH level!' }
      },
      { 
        color: '#EA4228',
        tooltip: { text: 'Too high pH level!' }
      }
    ]
    maxLimit = 14;  
  } else if (title === "LDR Level") {
    subArcs = [
      { 
        limit: 100, 
        color: '#EA4228', 
        showMark: true ,
        tooltip: { text: 'Low LDR!' }
      },
      { 
        limit: 800, 
        color: '#5BE12C', 
        showMark: true,
        tooltip: { text: 'Optimal LDR level!' }
      },
      { 
        color: '#EA4228',
        tooltip: { text: 'High LDR!' }
      }
    ]
    maxLimit = 1000;
  }

  // Ensure the value is within the specified range
  if (value < 0) {
    value = 0;
  } else if (value > maxLimit) {
    value = maxLimit;
  }

  const formatValue = (value) => value.toString();

  return (
    <div>
      <ReactGauge
        id="temperature-gauge"
        arc={{
          width: 0.2,
          padding: 0.01,
          subArcs: subArcs
        }}
        needle={{
          color: '#345243',
          length: 0.90,
          width: 15,
          animDelay: 200,
        }}
        value={value}
        labels={{
          valueLabel: {
            fontSize: 40,
            formatTextValue: formatValue,
          },
        }}
        minValue={0}
        maxValue={maxLimit}
      />
      <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>{title}</div>
      <div style={{ textAlign: "center", marginTop: "10px", color: message === "Optimal" ? "white" : "red" }}>
        {message}
      </div>
    </div>
  );
};

export default GaugeComponent;
