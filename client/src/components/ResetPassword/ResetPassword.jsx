import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./ResetPassword.module.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"

function ResetPassword() {
  const [input, setInput] = useState({
    email: "",
    favorite_movie: "",
    mother_first_name: "",
    password: "",
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
  };

  const disableButton = () => {
    if (
      input.email === "" ||
      input.password === "" ||
      input.favorite_movie === "" ||
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
      const res = await axios.put(
        "http://localhost:3002/api/user/password",
        input
      );
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response.data);
    }

    setInput({
      email: "",
      password: "",
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
            label="New password"
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
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <TextField
            required
            id="Mother_first_name"
            label="Mother first name"
            value={input.mother_first_name}
            onChange={(e) => handleChange(e)}
            name="mother_first_name"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
      </div>
      <Button
        variant="contained"
        sx={{ marginBottom: "1rem" }}
        disabled={disableButton()}
        color="success"
        onClick={(e) => handleSubmit(e)}
        endIcon={<SendIcon />}
      >
        Reset Password
      </Button>
    </form>
  );
}

export default ResetPassword;
