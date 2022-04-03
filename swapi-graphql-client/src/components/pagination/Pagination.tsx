import * as React from "react";
import { Typography, Pagination, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

//Types
type PropType = {
  page: number;
  setPage: any;
};

const useStyles = makeStyles({
  root: {
    padding: "10px 20px",
    color: "white",
    width: "auto",
  },

  paginate: {
    display: "flex",
    justifyContent: "flex-end",
    "& .MuiPagination-ul": {
      "& .MuiPaginationItem-root": {
        color: "#cccaca",
        backgroundColor: "#585656",
      },
    },
  },
});

const PaginationControlled = ({ page, setPage }: PropType) => {
  const classes = useStyles();

  // handle page change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className={classes.root}>
      <Typography className={classes.paginate}>Page: {page}</Typography>
      <Pagination
        className={classes.paginate}
        count={9}
        page={page}
        variant="outlined"
        onChange={handlePageChange}
      />
    </Stack>
  );
};
export default PaginationControlled;
