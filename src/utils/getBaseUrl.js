const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3001'; 
    } else if (process.env.NODE_ENV === 'production') {
      return 'https://awseb-e-3tdki3mfeb-stack-awsebrdsdatabase-snm8g9udfdxz.cfwky0ayk8gg.ca-central-1.rds.amazonaws.com'; 
    } else {
      throw new Error('Unknown environment');
    }
  };
  
  export default getBaseUrl;
  