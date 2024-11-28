const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3001'; 
    } else if (process.env.NODE_ENV === 'production') {
      return 'http://growth.ca-central-1.elasticbeanstalk.com'; 
    } else {
      throw new Error('Unknown environment');
    }
  };
  
  export default getBaseUrl;
  