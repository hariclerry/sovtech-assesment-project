import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Paper, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

import PaginationControlled from "./pagination/Pagination";
import SearchAppBar from "./search/Search";
import ListItems from "./commons/ListItems";
import { SearchContext } from "../context/Context.js";

export const GET_PAGE_PEOPLE = gql`
  query getPeoplePage($page: Int!) {
    peoplePaginate(page: $page) {
      count
      results {
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
  }
`;

const Loader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default function PeopleLists() {
  const [page, setPage] = React.useState(1);

  const { isSearching, setIsSearching } = useContext(SearchContext);

  const { loading, error, data } = useQuery(GET_PAGE_PEOPLE, {
    variables: { page },
  });
  let pages = 0;
  const renderPeopleList = () => {
    if (loading) {
      return (
        <Loader>
          {" "}
          <CircularProgress color="success" />
        </Loader>
      );
    }

    if (error) {
      <Typography
        variant="h5"
        component="h5"
        color="#cec4c4"
        textAlign="center"
      >
        An error has occurred
      </Typography>;
    }

    if (data) {
      pages = data.peoplePaginate.count;
      return (
        <>
          <ListItems data={data.peoplePaginate.results} />
        </>
      );
    }
    return;
  };

  return (
    <React.Fragment>
      <Paper sx={{ bgcolor: "transparent", height: "auto", boxShadow: "none" }}>
        <SearchAppBar />
        {!isSearching && renderPeopleList()}
        {!loading && !isSearching && (
          <PaginationControlled page={page} setPage={setPage} />
        )}
      </Paper>
    </React.Fragment>
  );
}
