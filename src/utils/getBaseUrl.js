const getBaseUrl = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  } else {
    return "https://growthnl.onrender.com";
  }
};
  
  export default getBaseUrl;
  