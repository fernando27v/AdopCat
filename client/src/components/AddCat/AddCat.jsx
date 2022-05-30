import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import styles from "./AddCat.module.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getBreeds } from "../../redux/slices/catSlice"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Input = styled('input')({
    display: 'none',
  });

function AddCat() {
  const loggedUser = useSelector((state) => state.userSlice.loggedUser);
  const breeds = useSelector((state) => state.catSlice.breeds);
  const dispatch= useDispatch();

  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    address: "",
    description: "",
    phone_number: "",
    BreedId: "",
    UserId: loggedUser.id,
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
      navigate("/home");
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

  useEffect(() => {
    if(breeds.length===0)dispatch(getBreeds())
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if(e.target.name === "img"){
      const src = window.URL.createObjectURL(e.target.files[0]);
        setInput((prev) => ({
          ...prev,
          img: src,
        }));
      Swal.fire({
        title: "Image upload successfully",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };

  const disableButton = () => {
    if (
      input.name === "" ||
      input.description === "" ||
      input.address === "" ||
      input.img === "" ||
      input.BreedId === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/cats/", input);
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response.data);
    }

    setInput({
      name: "",
      age: "",
      img: "",
      address: "",
      description: "",
      phone_number: "",
      BreedId: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)} >
      <div className={styles.divForm}>
        <div style={{ textAlign: "center" }}>
          <TextField
            required
            id="Name"
            label="Name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            name="name"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <TextField
            required
            id="Description"
            label="Description"
            multiline
            maxRows={5}
            value={input.description}
            onChange={(e) => handleChange(e)}
            name="description"
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <TextField
            required
            id="Address"
            label="Address"
            value={input.address}
            onChange={(e) => handleChange(e)}
            name="address"
            helperText="Cat location."
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <TextField
            id="Phone_number"
            label="Phone number"
            value={input.phone_number}
            onChange={(e) => handleChange(e)}
            name="phone_number"
            helperText="Phone number for more information."
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
        <div style={{ textAlign: "center",display: "flex", alignItems: "baseline" }}>
          <TextField
            id="Age"
            label="Age"
            value={input.age}
            onChange={(e) => handleChange(e)}
            name="age"
            type="number"
            helperText="Aproximated age in years."
            sx={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
          />
          <label htmlFor="contained-button-file" style={{margin:"20px 20px 0px 20px"}}>
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              name="img"
              onChange={(e) => handleChange(e)}
            />
            <Button variant="contained" component="span">
              Upload of cat image 
            </Button>
          </label>
        </div>
        <div>
         <FormControl  sx={{ m: 1, minWidth: 230,margin: "20px 20px 0px 20px" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Breed</InputLabel>
        <Select
        required
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={input.BreedId}
          onChange={(e) => handleChange(e)}
          label="Breed"
          name="BreedId"
        >
          {breeds && breeds.map((b)=>{
            return <MenuItem value={b.id} key={b.id}>{b.name}</MenuItem>
          })}
        </Select>
      </FormControl>
      {input.img && <img src={input.img} alt="cat" style={{width: "210px",height: "150px",marginLeft: "20px"}}/>}
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
        Submit
      </Button>
    </form>
  );
}

export default AddCat;
