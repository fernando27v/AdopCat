import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./LogIn.module.css";
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn,deleteRejectedUser } from "../../redux/slices/userSlice";
import Swal from "sweetalert2";

function LogIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.userSlice.loggedUser);
  const rejectedUser = useSelector((state) => state.userSlice.rejectedUser);
  useEffect(() => {
    if (Object.entries(loggedUser).length > 0) {
      navigate("/home");
    }
    if(rejectedUser.length>0){
      Swal.fire({
        title: `${rejectedUser}`,
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Ok",
      });
      dispatch(deleteRejectedUser())
    }
  }, [Object.entries(loggedUser).length,rejectedUser]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(logIn(input));

    setInput({
      email: "",
      password: "",
    });
  };

  const disableButton = () => {
    if (input.email === "" || input.password === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.divForm}>
        <div style={{ textAlign: "center" }}>
          <TextField
            id="Email"
            label="Email"
            value={input.email}
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <TextField
            id="Password"
            label="Password"
            type="password"
            name="password"
            value={input.password}
            onChange={(e) => {
              handleChange(e);
            }}
            autoComplete="current-password"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
        <div style={{ margin: "1rem", alignSelf: "flex-start" }}>
          <Link to="/reset-password">Reset Password</Link>
        </div>
      </div>
      <Button
        variant="contained"
        sx={{ marginBottom: "1rem" }}
        color="success"
        endIcon={<SendIcon />}
        disabled={disableButton()}
        onClick={(e) => handleSubmit(e)}
      >
        Log In
      </Button>
    </form>
  );
}

export default LogIn;
