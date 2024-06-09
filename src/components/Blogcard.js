import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export default function Blogcard({ content, title, linkTo, image }) {
  const isMobile = useMediaQuery("(max-width:769px)");

  return (
    <Card
      sx={{
        maxWidth: 385,
        display: "flex",
        justifyContent: "center",
        justifySelf: "stretch",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "20px",
        width: isMobile ? "80%" : "100%",
        height: isMobile ? "50%" : "100%",
      }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{
          sx: {
            fontFamily: "Quicksand, sans-serif",
            color: "#233349",
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      />
      <CardMedia component="img" height="280px" image={image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={linkTo}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              bgcolor: "#233349",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Check out the source!
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
