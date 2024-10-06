import * as React from "react";
import { Grid } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

export default function AdviceBox({ type, question, comment }) {
  return (
      <Card
        variant="outlined"
        sx={{
          minWidth: 200,
          maxWidth: 330,
          border: "3px solid #233349",
          borderRadius: "10px",
        }}
      >
        <CardContent
          sx={{
            border: "2px solid #233349",
            borderRadius: "10px",
            padding: "8px",
          }}
        >
          <Typography fontSize="sm">
            <Grid
              component="button"
              
              borderRadius="5px"
              fontWeight="lg"
              color="#233349"
            >
              {type}
            </Grid>{" "}
            {question}
          </Typography>
          <Grid
            sx={{ color: "#D4E1F4",
              padding: "8px" }}
          >
            ...more
          </Grid>
          
        </CardContent>

        <CardContent orientation="horizontal" sx={{ display: "flex", gap: 1 }}>
          <Input
            variant="plain"
            size="sm"
            value={comment}
            sx={{
              flex: 1,
              px: 0,
              backgroundColor: "#D4E1F4",
              padding: "5px",
            }}
          />
          <Grid
            sx={{ border: "2px solid #233349",
              borderRadius: "10px",
              padding: "8px" }}
          >
            Post
          </Grid>
        </CardContent>
      </Card>
  );
}
