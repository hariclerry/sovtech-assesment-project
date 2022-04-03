import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import { gql, useLazyQuery } from "@apollo/client";
import { InputBase, Button, Toolbar, Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ListItems from "../commons/ListItems";
import { SearchContext } from "../../context/Context.js";

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#cec4c4",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
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

const Loader = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SEARCH_PEOPLE = gql`
  query getPeopleSearch($name: String!) {
    person(name: $name) {
      name
      gender
      height
      mass
      birth_year
      eye_color
      skin_color
      hair_color
    }
  }
`;

export default function SearchAppBar() {
  const [inputText, setInputText] = React.useState("");
  const { isSearching, setIsSearching } = useContext(SearchContext);

  const [loadPerson, { loading, error, data }] = useLazyQuery(SEARCH_PEOPLE);

  const handleSubmit = (event: React.ChangeEvent<{}>) => {
    event.preventDefault();
    if (inputText) {
      loadPerson({ variables: { name: inputText } });
      setIsSearching(!isSearching);
    }
    setInputText("");
  };

  const renderSearchPeopleList = () => {
    if (loading) {
      return (
        <Loader>
          {" "}
          <CircularProgress color="success" />
        </Loader>
      );
    }

    if (error) {
      return (
        <Typography
          variant="h5"
          component="h5"
          color="#cec4c4"
          textAlign="center"
        >
          An error has occurred
        </Typography>
      );
    }

    if (data) {
      return (
        <>
          {data && data.person.length > 0 ? (
            <ListItems data={data.person} />
          ) : (
            <Typography
              variant="h5"
              component="h5"
              color="#cec4c4"
              textAlign="center"
            >
              Person not found
            </Typography>
          )}
        </>
      );
    }
    return;
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: isSearching ? "space-between" : "flex-end",
          alignItems: "center",
        }}
      >
        {isSearching && (
          <Button
            variant="contained"
            size="large"
            onClick={() => window.location.reload()}
            sx={{
              pt: 0.5,
              pb: 0.5,
              pl: 1.5,
              pr: 1.5,
              color: "#b2aeae",
              bgcolor: "transparent",
              border: "none",
            }}
          >
            Back
          </Button>
        )}
        <Toolbar>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              name="search"
              onChange={(e) => setInputText(e.target.value)}
            />
          </Search>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            color="success"
            onClick={handleSubmit}
            sx={{ ml: 1.5, pt: 0.5, pb: 0.5, pl: 1.5, pr: 1.5 }}
          >
            Submit
          </Button>
        </Toolbar>
      </Box>
      {renderSearchPeopleList()}
    </>
  );
}
