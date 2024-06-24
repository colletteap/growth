import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CustomButton from "../soundReact/customButton";
import { useMediaQuery } from "@mui/material";

export default function Landingblogcard({ content, title, linkTo, image }) {
  const isMobile = useMediaQuery("(max-width:769px)");
  return (
    <Card
    sx={{
      maxWidth: 395,
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      justifySelf: "stretch",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: "20px",
      width: isMobile ? "80%" : "100%",
      height: isMobile ? "50%" : "80%",
    }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{
          sx: {
            fontFamily: "Quicksand, sans-serif",
            color: "#233349",
            fontWeight: "bold",
          },
        }}
      />
      <CardMedia component="img" height="50%" image={image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={linkTo}>
          <CustomButton
            variant="Question"
            sx={{
              textTransform: "capitalize",
              bgcolor: "#233349",
              borderRadius: "15px",
              marginTop: "10px",
            }}
          >
            See more!
          </CustomButton>
        </Link>
      </CardActions>
    </Card>
  );
}
