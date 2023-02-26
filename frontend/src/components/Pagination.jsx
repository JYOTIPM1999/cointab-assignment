import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import { userContext } from "../ContextAPI/Context";

const Pagination = () => {
  const { setAllUsers, pages, setPages, page, setPage, query } =
    useContext(userContext);

  console.log(query);

  const btn = new Array(pages).fill(0).map((el, i) => {
    const btnStyle = !(
      i >= Math.floor(page / 10) * 10 - 1 &&
      i <= (Math.floor(page / 10) + 1) * 10
    );

    return (
      <Button
        key={i}
        display={btnStyle && "none"}
        size="sm"
        bg={page == i ? "#eb8705" : "white"}
        color={page == i ? "white" : "#eb8705"}
        onClick={() => setPage(i)}
      >
        {i + 1}
      </Button>
    );
  });

  useEffect(() => {
    axios
      .post(
        `https://cointab-for-backend.up.railway.app/users/filter/${page * 10}`,
        query
      )
      .then((res) => {
        setAllUsers(res.data.filterUsers);
        // console.log(res.data.filterUsers);
        setPages(
          res.data.count % 10 === 0
            ? res.data.pagesCount - 1
            : res.data.pagesCount
        );
      });
  }, [page, query]);

  return (
    <>
      <Box m="20px">
        <Button
          bg="#eb8705"
          color="white"
          display={page == 0 && "none"}
          onClick={() => setPage(page - 1)}
        >
          Back
        </Button>
        {btn}
        <Button
          bg="#eb8705"
          color="white"
          display={(page == pages - 1 || pages == 0) && "none"}
          onClick={() => setPage(page + 1)}
        >
          Forward
        </Button>
      </Box>
    </>
  );
};

export default Pagination;
