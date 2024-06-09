import React from "react";
import Grid from "@mui/joy/Grid";
import AdviceBox from "./Advicebox";
import "../styles/Advicelanding.css";
import { adviceData } from "./Data";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="blueHeading">Ask fellow teachers a question</h1>

      <Grid className="AdviceContainer">
        {adviceData.map((item, index) => (
          <AdviceBox
            key={index}
            type={item.type}
            question={item.question}
            linkTo={item.linkTo}
            comment={item.comment}
          />
        ))}
      </Grid>
    </>
  );
};

export default AdviceLanding;
