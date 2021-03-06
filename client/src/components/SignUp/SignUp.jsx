import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./SignUp.module.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"

function SignUp() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    date_of_birth: "",
    favorite_movie: "",
    mother_first_name: "",
  });
  const navigate = useNavigate();
  const [response, setResponse] = useState({ success: "", message: "" });

  useEffect(() => {
    if (response.success) {
      Swal.fire({
        title: `${response.message}`,
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Cool",
      });
      setResponse("");
      navigate("/login")
    } else if (response.success === false) {
      console.log(response);
      Swal.fire({
        title: `${response.message}`,
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Ok",
      });
      setResponse("");
    }
  }, [response.success]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setResponse("");
  };

  const disableButton = () => {
    if (
      input.email === "" ||
      input.password === "" ||
      input.favorite_movie === "" ||
      input.name === "" ||
      input.lastName === "" ||
      input.mother_first_name === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3002/api/user/signup",
        input
      );
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response.data);
    }

    setInput({
      email: "",
      password: "",
      name: "",
      lastName: "",
      date_of_birth: "",
      favorite_movie: "",
      mother_first_name: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.divForm}>
        <div style={{ textAlign: "center" }}>
          <TextField
            required
            id="Name"
            label="First name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            name="name"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <TextField
            required
            id="Last_name"
            label="Last name"
            value={input.lastName}
            onChange={(e) => handleChange(e)}
            name="lastName"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <TextField
            required
            id="Email"
            label="Email"
            type="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
            name="email"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <TextField
            required
            id="Password"
            label="Password"
            type="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
            name="password"
            autoComplete="current-password"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <TextField
            required
            id="Favorite_movie"
            label="Favorite movie"
            value={input.favorite_movie}
            onChange={(e) => handleChange(e)}
            name="favorite_movie"
            helperText="For reset password."
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <TextField
            required
            id="Mother_first_name"
            label="Mother first name"
            value={input.mother_first_name}
            onChange={(e) => handleChange(e)}
            name="mother_first_name"
            helperText="For reset password."
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
        <TextField
          id="Date_of_birth"
          label="Date of birth"
          type="date"
          value={input.date_of_birth}
          onChange={(e) => handleChange(e)}
          name="date_of_birth"
          InputLabelProps={{ shrink: true }}
          sx={{ marginTop: "20px" }}
        />
      </div>
      <Button
        variant="contained"
        sx={{ marginBottom: "1rem" }}
        disabled={disableButton()}
        color="success"
        onClick={(e) => handleSubmit(e)}
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </form>
  );
}

export default SignUp;
