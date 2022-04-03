import * as React from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import StarWarImage from "../../images/star-war.jpg";

//Types
type PropsType = {
  open: boolean;
  setOpen: any;
  person: any;
};

export default function PersonDetailsDialog({
  open,
  setOpen,
  person,
}: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
        <DialogContent>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image={StarWarImage}
                alt="star war"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  {person.name} Details
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  textTransform="capitalize"
                >
                  <b> Gender:</b> {person.gender}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  textTransform="capitalize"
                >
                  <b>Height:</b> {person.height}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  textTransform="capitalize"
                >
                  <b>Mass:</b> {person.mass}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  textTransform="capitalize"
                >
                  <b>Birth Year:</b> {person.birth_year}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  textTransform="capitalize"
                >
                  <b> Hair color: </b>
                  {person.hair_color}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  textTransform="capitalize"
                >
                  <b>Skin color:</b> {person.skin_color}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  textTransform="capitalize"
                >
                  <b>Eye color:</b> {person.eye_color}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
