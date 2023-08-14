// dateUtils.js
export function convertDateToFormattedString(dateString) {
    const dateObject = new Date(dateString);
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return dateObject.toLocaleDateString("en-GB", options);
  }
  