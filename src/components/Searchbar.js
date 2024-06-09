import * as React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/joy/Grid";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "15px",
  backgroundColor: "#233349",
  "&:hover": {
    backgroundColor: "#3c4d6e",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar({ onChange }) {
  console.log("onChange prop:", onChange);
  return (
    <Grid>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon
              sx={{
                color: "#ffff",
              }}
            />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{
              color: "#ffff",
            }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={onChange}
          />
        </Search>
      </Toolbar>
    </Grid>
  );
}
