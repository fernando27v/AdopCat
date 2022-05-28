import React from "react";
import { Box, Toolbar, Typography, AppBar, Button } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {logOut} from "../../redux/slices/userSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavBar() {
  const loggedUser = useSelector((state) => state.userSlice.loggedUser);
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#30a139" }}>
        <Toolbar>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <PetsIcon sx={{ fontSize: "2.5rem", marginRight: "1rem" }} />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {
            Object.entries(loggedUser).length === 0 ? 
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit" sx={{ marginLeft: "0.5rem" }}>
                  Login
                </Button>
              </Link>
             : 
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit" sx={{ marginLeft: "0.5rem" }}>
                  Profile
                </Button>
              </Link>
            
          }
          {
            Object.entries(loggedUser).length === 0 ? 
            <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" sx={{ marginLeft: "0.5rem" }}>
              SignUp
            </Button>
          </Link> : 
            <Button color="inherit" sx={{ marginLeft: "0.5rem" }} onClick={()=>dispatch(logOut())}>
              Log Out
            </Button>
      
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
