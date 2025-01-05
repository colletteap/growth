const getBaseUrl = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  } else {
    return "https://growthnl.com";
  }
};
  
  export default getBaseUrl;
  