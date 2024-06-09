import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

export default function AdviceBox({ type, question, linkTo, comment }) {
  return (
    <Link to={linkTo} underline="none">
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
          <Link
            to={linkTo}
            component="button"
            underline="none"
            fontSize="sm"
            fontWeight="lg"
            textColor="text.primary"
          ></Link>
          <Typography fontSize="sm">
            <Link
              to={linkTo}
              component="button"
              color="neutral"
              fontWeight="lg"
              textColor="#233349"
            >
              {type}
            </Link>{" "}
            {question}
          </Typography>
          <Link
            to={linkTo}
            component="button"
            underline="none"
            fontSize="sm"
            startDecorator="…"
            sx={{ color: "text.tertiary" }}
          >
            more
          </Link>
          <Link
            to={linkTo}
            component="button"
            underline="none"
            fontSize="10px"
            sx={{ color: "text.tertiary" }}
          ></Link>
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
          <Link
            underline="none"
            role="button"
            border="1px solid #233349"
            borderRadius="10px"
            padding="5px"
          >
            Post
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
}
