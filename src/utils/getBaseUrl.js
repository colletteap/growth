const getBaseUrl = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  } else {
    return "http://growth.ca-central-1.elasticbeanstalk.com";
  }
};
  
  export default getBaseUrl;
  