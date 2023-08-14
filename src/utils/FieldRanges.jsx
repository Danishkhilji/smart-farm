// FieldRanges.js

// Temperature validation function
export function validateTemperature(value) {
    if (value < 21) {
      return "low";
    } else if (value >= 21 && value <= 24) {
      return "Optimal";
    } else {
      return "high";
    }
  }
  
  // Water level validation function
  export function validateWaterLevel(value) {
    if (value < 200) {
      return "low";
    } else if (value >= 200 && value <= 500) {
      return "Optimal";
    } else {
      return "high";
    }
  }
  
  // pH level validation function
  export function validatePh(value) {
    if (value < 5.5) {
      return "Acidic";
    } else if (value >= 5.5 && value <= 6.5) {
      return "Optimal";
    } else {
      return "Alkaline";
    }
  }
  
  // LDR validation function
  export function validateLdr(value) {
    if (value < 100) {
      return "low";
    } else if (value >= 100 && value <= 800) {
      return "Optimal";
    } else {
      return "high";
    }
  }
  