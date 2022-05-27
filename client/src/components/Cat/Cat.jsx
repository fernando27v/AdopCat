import * as React from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Cat({ cat }) {
  return (
    <Card sx={{ maxWidth: 300, margin: "1rem" }} variant="outlined">
      <CardHeader title={cat.name} subheader={cat.address} />
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
        {cat.isAdopted === false && <Button size="small" variant="contained" color="success" sx={{marginLeft: "10px"}}>Adopt</Button>}
      </CardActions>
    </Card>
  );
}
