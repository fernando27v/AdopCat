import {useState} from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

export default function Cat({ cat }) {
  const loggedUser = useSelector((state) => state.userSlice.loggedUser);
  const [isDelete, setIsDelete] = useState(false);

  const deleteCat = async () => {
    try {
      const res = await axios.delete(`http://localhost:3002/api/cats`, {
        data: { id: cat.id, UserId: loggedUser.id },
      });
      Swal.fire({
        title: `Delete succesfully`,
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Sure",
      });
      setIsDelete(true);
    } catch (err) {
      Swal.fire({
        title: `${err.message}`,
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (

    <Card    sx={isDelete ? { display: "none"} : { maxWidth: 300, margin: "1rem" }} variant="outlined">
      <CardHeader
        title={cat.name}
        subheader={cat.address}
        action={
          cat.UserId === loggedUser.id && (
            <IconButton onClick={() => deleteCat()}>
              <DeleteIcon />
            </IconButton>
          )
        }
      />
      <CardMedia component="img" height="194" image={cat.img} alt="Cat" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cat.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {cat.phone_number}
        </Typography>
        {cat.isAdopted === false && (
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{ marginLeft: "10px" }}
          >
            Adopt
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
