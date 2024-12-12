import React, { useState, useEffect }from "react";
import Grid from "@mui/joy/Grid";
import AdviceBox from "./Advicebox";
import "../styles/Advicelanding.css";
import getBaseUrl from "../utils/getBaseUrl";

const AdviceLanding = () => {
  const [adviceLanding, setAdviceLanding] = useState([]);

  useEffect(() => {
    const fetchAdviceLanding = async () => {
      try {
        const response = await fetch(`${getBaseUrl()}/adviceLanding`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setAdviceLanding(data); 
          console.log('Fetched adviceLanding:', data); // Log the fetched data
        } else {
          const errorText = await response.text();
          console.error('Failed to fetch adviceLanding data:', response.status, errorText);
        }
      } catch (error) {
        console.error('Error fetching adviceLanding data:', error);
      }
    };
  
    fetchAdviceLanding();
  }, []);


  return (
    <>
      <h1 className="blueHeading">Ask fellow teachers a question</h1>

      <Grid className="AdviceContainer">
        {adviceLanding.map((item, index) => (
          <AdviceBox
            key={index}
            type={item.type}
            question={item.question}
            comment={item.comment}
          />
        ))}
      </Grid>
    </>
  );
};

export default AdviceLanding;
