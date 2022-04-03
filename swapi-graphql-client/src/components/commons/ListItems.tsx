import * as React from "react";
import { Paper, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonDetailsDialog from "../people/Person";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  justifyContent: "space-between",
  color: "rgb(79 156 58)",
  fontSize: "1.5rem",
  lineHeight: "60px",
  width: "100%",
  backgroundColor: "rgb(0 0 0 / 26%)",
  padding: "10px 10px",
  margin: "10px 0",
}));

//Types
type PersonType = {
  name: string;
  height: number;
  mass: string;
  gender: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  hair_color: string;
};

export default function ListItems(props: any) {
  const [open, setOpen] = React.useState(false);
  const [personDetails, setPersonDetails] = React.useState(false);

  const handleClickOpen = (person: any) => {
    setPersonDetails(person);
    setOpen(true);
  };

  const { data } = props;
  return (
    <React.Fragment>
      {data &&
        data.map((person: PersonType, index: number) => (
          <Item key={index}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h5">
                {person.name}
              </Typography>
            </Stack>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleClickOpen(person)}
              sx={{
                pt: 0.5,
                pb: 0.5,
                pl: 1.5,
                pr: 1.5,
                color: "#b2aeae",
                bgcolor: "transparent",
                border: "none",
                textTransform: "capitalize",
              }}
            >
              Personal Details
            </Button>
          </Item>
        ))}
      <PersonDetailsDialog
        setOpen={setOpen}
        open={open}
        person={personDetails}
      />
    </React.Fragment>
  );
}
